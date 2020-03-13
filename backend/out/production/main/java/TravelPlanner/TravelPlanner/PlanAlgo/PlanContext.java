package TravelPlanner.TravelPlanner.PlanAlgo;
import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;

import java.util.List;
public class PlanContext {
    private PlanStrategy planStrategy;
    public PlanContext(PlanStrategy planStrategy) {
        this.planStrategy = planStrategy;
    }
    public Plan executeStrategy(List<Place> placeList) {
        return planStrategy.calculatePlan(placeList);
    }
}
