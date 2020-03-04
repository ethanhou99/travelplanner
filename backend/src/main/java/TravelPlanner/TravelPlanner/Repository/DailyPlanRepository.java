package TravelPlanner.TravelPlanner.Repository;

import TravelPlanner.TravelPlanner.Entity.DailyPlan;
import TravelPlanner.TravelPlanner.Entity.Plan;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DailyPlanRepository extends JpaRepository<DailyPlan, Integer> {
//    @EntityGraph(value = "DailyPlan.plan" )
//    List<DailyPlan> findByPlan(Plan plan);
}
