package TravelPlanner.TravelPlanner.Repository;

import TravelPlanner.TravelPlanner.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, Integer> {
    //find by userId
    User findByUserId(Integer userId);
<<<<<<< HEAD

    //find all the users on the site
    List<User> findAll();
=======
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b

    List<User> findAll();

    User findByUserEmailAndUserPassword(String userEmail, String userPassword);

}
