package TravelPlanner.TravelPlanner.Repository;

import TravelPlanner.TravelPlanner.Entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlacesRepository extends JpaRepository<Place, Integer> {
    //list all the places in san francisco ---> 30 loaded places in DB
    List<Place> findAll();

    Place findAllByPlaceId(Integer placeId);

}
