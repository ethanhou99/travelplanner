package TravelPlanner.TravelPlanner.Controller;

import TravelPlanner.TravelPlanner.Entity.User;

import TravelPlanner.TravelPlanner.Repository.UsersRepository;
import TravelPlanner.TravelPlanner.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class UserController {

    UserService userService;
    private User user;
    private HttpServletResponse response;

    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    public UserController() {

    }

    @GetMapping("/users")
    public List<User> findAll() {
        return userService.findAll();
    }
    //registration ---> createUser
    @PostMapping("/registration")
    public User register(@RequestBody User user) {
        return userService.createUser(user);
    }

    //perform Login
    @PostMapping("/login")
    public User login( @RequestBody User user, HttpServletResponse response) {
        this.user = user;
        this.response = response;

        user = userService.loginUser(user);
        if (user == null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        } else {
            return user;
        }
    }
}
