package TravelPlanner.TravelPlanner.Controller;

import TravelPlanner.TravelPlanner.Entity.User;

import TravelPlanner.TravelPlanner.Repository.UsersRepository;
import TravelPlanner.TravelPlanner.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;
    private HttpServletResponse response;
    private User user;


    //registration ---> createUser
    @CrossOrigin
    @PostMapping(value = "/registration")
    public User createNewUser(@Valid @RequestBody User user, HttpServletResponse response) {
        this.response = response;
        User userExists = userService.findUserByUserName(user.getUserName());
        if (userExists != null) {
            response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            return null;
        } else {
            User resultUser = userService.saveUser(user);
            response.setStatus(HttpServletResponse.SC_ACCEPTED);
            return resultUser;
        }
    }

    //unauthorized home page
    @CrossOrigin
    @GetMapping(value = {"/", "/home"})
    public String home() {
        return "/home";
    }

    //perform Login
    @CrossOrigin
    @PostMapping("/login")
    public User login( @RequestBody User user, HttpServletResponse response) {
        this.user = user;
        this.response = response;

        User userResponse = userService.loginUser(user);
        if (userResponse == null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        } else {
            response.setStatus(HttpServletResponse.SC_ACCEPTED);
            return userResponse;
        }
    }

    //authorized home page
    @CrossOrigin
    @GetMapping(value = "/user/home")
    public String userHome() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByUserName(auth.getName());
        return "/user/home";
    }

    @PostMapping(value = "/user/home")
    @CrossOrigin
    public User saveProfile(@RequestBody User userProfile) {
        return userService.saveProfile(userProfile);
    }
}
