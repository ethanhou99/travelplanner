package TravelPlanner.TravelPlanner.PlanAlgo;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;

import java.util.List;

public class PlanAlgoOne implements PlanStrategy {
    @Override
    public Plan calculatePlan(List<Place> placeList) {
        return new Plan();
    }
}
