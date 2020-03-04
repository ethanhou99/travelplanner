package TravelPlanner.TravelPlanner.Repository;

import TravelPlanner.TravelPlanner.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, Integer> {
    //find by userId
    User findByUserId(Integer userId);

    List<User> findAll();

    User findByUserEmailAndUserPassword(String userEmail, String userPassword);

}
