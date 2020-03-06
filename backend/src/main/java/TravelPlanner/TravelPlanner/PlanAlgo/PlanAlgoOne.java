package TravelPlanner.TravelPlanner.PlanAlgo;

import TravelPlanner.TravelPlanner.Entity.DailyPlan;
import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanAlgoException.InvalidDurationException;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanAlgoException.NoPlacesException;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PlanAlgoOne implements PlanStrategy {
    @Override
    public Plan calculatePlan(List<Place> placeList, int duration) throws NoPlacesException, InvalidDurationException {
        if (placeList == null || placeList.size() == 0) {
            throw new NoPlacesException("NO PLACES");
        }
        if (duration <= 0 || duration > 5) {
            throw new InvalidDurationException("INVALID DURATION");
        }
        Plan plan = new Plan();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String formatted = df.format(new Date());
        plan.setDate(formatted);
        System.err.println(formatted);
        int placeLength = placeList.size();
        List<DailyPlan> dailyPlanList = new ArrayList<>(duration);
        dailyPlanList.add(new DailyPlan(placeList));
        System.out.println(dailyPlanList);
        return plan;
    }
}
