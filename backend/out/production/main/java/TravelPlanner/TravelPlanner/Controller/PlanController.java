package TravelPlanner.TravelPlanner.Controller;

import TravelPlanner.TravelPlanner.Entity.DailyPlan;
import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import TravelPlanner.TravelPlanner.Repository.PlacesRepository;
import TravelPlanner.TravelPlanner.Repository.PlansRepository;
import TravelPlanner.TravelPlanner.Service.PlaceService;
import TravelPlanner.TravelPlanner.Service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlanController {

    PlanService planService;
    PlaceService placeService;

    @Autowired
    public PlanController(PlanService planService, PlaceService placeService) {
        super();
        this.planService = planService;
        this.placeService = placeService;
    }

    public PlanController() {

    }

    public void setPlanService(PlanService planService) {
        this.planService = planService;
    }

    //save the plan
    @PostMapping("/plan/{userId}")
    public void savePlan(@RequestBody Plan plan, @PathVariable Integer userId) {
        planService.savePlan(plan, userId);
    }

    //get user's planList
    @GetMapping("/plan/{userId}")
    public List<Plan> getPlans(@PathVariable Integer userId) {
        return planService.getPlansByUser(userId);
    }

    //delete plan
    @DeleteMapping("/deletePlan/{planId}")
    public boolean deletePlan(@PathVariable Integer planId) {
        planService.deletePlanById(planId);
        return true;
    }
    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        return placeService.findAll();
    }

    @GetMapping("/plan/generate/{userId}")
    public Plan generatePlan(@RequestBody List<Place> placeList, @PathVariable Integer userId) {
        return planService.generatePlan(placeList, userId);
    }
}
