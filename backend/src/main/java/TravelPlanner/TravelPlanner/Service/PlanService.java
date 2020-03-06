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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

    public Plan generatePlan(List<Place> placeList, int duration, Integer userId) {
//
        //TODO: algorithm
        PlanContext planContext = new PlanContext(new PlanAlgoOne());
        try {
            Plan plan =  planContext.executeStrategy(placeList, 3);
            plan.setUserId(userId);
            return plansRepository.save(plan);
        } catch(Exception e) {
            System.err.println(e);
        }
        Plan plan = plansRepository.save(new Plan());
        plan.setUserId(userId);
        return plan;
//        DailyPlan dp = dailyPlanRepository.save(new DailyPlan());
//        dp.setPlanId(plan.getPlanId());
//        dp.setPlaceList(placeList);
//        dp.setDayNo(1);
//        dailyPlanRepository.save(dp);
//        List<DailyPlan> list = new ArrayList<>();
//        list.add(dp);
//        plan.setDailyPlanList(list);
    }
}
