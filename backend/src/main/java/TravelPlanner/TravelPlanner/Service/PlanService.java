package TravelPlanner.TravelPlanner.Service;

import TravelPlanner.TravelPlanner.Entity.DailyPlan;
import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import TravelPlanner.TravelPlanner.Entity.User;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanAlgoOne;
import TravelPlanner.TravelPlanner.Repository.DailyPlanRepository;
import TravelPlanner.TravelPlanner.Repository.PlacesRepository;
import TravelPlanner.TravelPlanner.Repository.PlansRepository;
import TravelPlanner.TravelPlanner.Repository.UsersRepository;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanStrategy;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanContext;
import TravelPlanner.TravelPlanner.PlanAlgo.PlanAlgoOne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PlanService {
    PlansRepository plansRepository;
    PlacesRepository placesRepository;
    UsersRepository usersRepository;
    DailyPlanRepository dailyPlanRepository;

    @Autowired
    public PlanService(PlansRepository planRepository, PlacesRepository placesRepository,
                       UsersRepository usersRepository, DailyPlanRepository dailyPlanRepository) {
        super();
        this.plansRepository = planRepository;
        this.placesRepository = placesRepository;
        this.usersRepository = usersRepository;
        this.dailyPlanRepository = dailyPlanRepository;
    }


    public PlanService() {

    }

    //listing out an user's plan list
    public List<Plan> getPlansByUser(Integer userId) {
        return plansRepository.findPlansByUserId(userId);
    }

    //get the plan by planId because user might change certain places in the certain plan
    public Plan getPlanByPlanId(Integer planId) {
        return plansRepository.findPlanByPlanId(planId);
    }

    //add Plan
    public Plan addPlan(Plan plan) {
        return plansRepository.save(plan);
    }

    //delete plan
    public boolean deletePlanById(Integer planId) {
        Plan plan = plansRepository.getOne(planId);
        plansRepository.delete(plan);
        return true;
    }

    //save the plans into plansRepository
    public Plan savePlan(Plan plan, Integer userId) {
        plan.setUserId(userId);
        for (DailyPlan dailyPlan : plan.getDailyPlanList()) {
            dailyPlanRepository.save(dailyPlan);
        }
        return plansRepository.save(plan);
    }
    public Plan generatePlan(List<Place> placeList, Integer duration, Integer userId) {
        //Plan plan = new Plan();
//        Plan plan= plansRepository.save(new Plan());
//        plan.setUserId(userId);
        //TODO: algorithm
        PlanContext planContext = new PlanContext(new PlanAlgoOne());
        Plan plan = planContext.executeStrategy(placeList);
        plan.setUserId(userId);

        int dailyPlaceNum = (int) placeList.size()/duration;
        int remain = placeList.size() % duration;
        List<DailyPlan> list = new ArrayList<>();
        for (int i = 0; i < duration; i++) {
            DailyPlan dp = new DailyPlan();
            List<Place> cur = new ArrayList<>();
            for (int j = 0; j < dailyPlaceNum; j++) {
                cur.add(placeList.get(i * dailyPlaceNum + j));
            }
            if (remain > 0) {
                cur.add(placeList.get(duration * dailyPlaceNum + remain - 1));
                remain--;
            }
            //dp.setPlanId(plan.getPlanId());
            dp.setPlaceList(cur);
            dp.setDayNo(i + 1);
            list.add(dp);
        }
        List<DailyPlan> finalListOfDailyPlan = new ArrayList<>();
        for (DailyPlan dailyPlan : list) {
//            dailyPlan.getPlaceList().sort(new Comparator<Place>() {
//                @Override
//                public int compare(Place o1, Place o2) {
//                    if (o1.getLatitude().equals(o2.getLatitude())) {
//                        return 0;
//                    }
//                    return o1.getLatitude() < o2.getLatitude() ? -1 : 1;
//                }
//            });
            DailyPlan cur = getMinimalDis(dailyPlan);
            finalListOfDailyPlan.add(cur);
        }
//        dailyPlanRepository.save(dp);
        plan.setDailyPlanList(list);
        return plan;
    }
    private DailyPlan getMinimalDis(DailyPlan dp) {
        double[] min = new double[] {Integer.MAX_VALUE};
        List<List<Place>> res = new ArrayList<>();
        List<Place> curPath = new ArrayList<>();
        Place prePlace = new Place();
        recursion(min, dp.getPlaceList(),0, 0, res, null);
        dp.setPlaceList(res.get(0));
        return res.size() == 0 ? new DailyPlan() :dp;
    }
    private void recursion(double[] min, List<Place> list, int index, double sum, List<List<Place>> res, Place prePlace) {
        //base case
        if(list == null || list.size() == 0) {
            return;
        }
        if(index == list.size()) {
            if(sum < min[0]) {
                if(res.size() == 0) {
                    res.add(new ArrayList<>(list));
                }else {
                    res.set(0, new ArrayList<>(list));
                }
                   min[0] = sum;
            }
            return;
        }
        //induction rule
        for(int i = index; i < list.size(); i++) {
            //swap
            swap(i, index, list);
            double newDis = 0;
            Place curPlace = list.get(index);
            if(prePlace != null ) {
                if(curPlace != null) {
                    double distanceLon = Math.abs(curPlace.getLongitude() - prePlace.getLongitude());
                    double distanceLat = Math.abs(curPlace.getLatitude() - prePlace.getLatitude());
                    newDis = Math.sqrt(distanceLon * distanceLon + distanceLat * distanceLat);
                }
//                newDis = Math.sqrt(Math.abs(curPlace.getLongitude() - prePlace.getLongitude()) * Math.abs(curPlace.getLatitude() - prePlace.getLatitude()));
            }
            recursion(min, list, index + 1, sum + newDis, res, curPlace);
            //recover
            swap(i, index, list);
        }
    }
    private void swap(int i, int index, List<Place> list) {
        Place tmp = list.get(index);
        list.set(index, list.get(i));
        list.set(i, tmp);
    }
}
