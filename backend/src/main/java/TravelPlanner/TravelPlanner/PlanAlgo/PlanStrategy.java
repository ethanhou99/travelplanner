package TravelPlanner.TravelPlanner.PlanAlgo;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanAlgoException.InvalidDurationException;

import java.util.List;

public interface PlanStrategy {
    public Plan calculatePlan(List<Place> placeList, int duration) throws Exception, InvalidDurationException;
}
