package TravelPlanner.TravelPlanner.PlanAlgo;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;

import java.util.List;

public interface PlanStrategy {
    public Plan calculatePlan(List<Place> placeList);
}
