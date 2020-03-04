package TravelPlanner.TravelPlanner.Service;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import TravelPlanner.TravelPlanner.Repository.PlacesRepository;
import TravelPlanner.TravelPlanner.Repository.PlansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceService {
    PlansRepository plansRepository;
    PlacesRepository placesRepository;

    @Autowired
    public PlaceService(PlansRepository plansRepository, PlacesRepository placesRepository ) {
        super();
        this.plansRepository = plansRepository;
        this.placesRepository = placesRepository;
    }

    public PlaceService() {
    }

    public List<Place> findAll() {
        return placesRepository.findAll();
    }

    //use to save the plan
    public void setPlansRepository(PlansRepository newRepository) {
        this.plansRepository = newRepository;
    }

}
