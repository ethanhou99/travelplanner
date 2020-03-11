package TravelPlanner.TravelPlanner.Service;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.Plan;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class PlanServiceTest {
    @Autowired
    private PlanService planService;
    @Test
    public void testGeneratePlan() {
        Place place1 = new Place();
        place1.setPlaceName("San Francisco Museum of Modern Art");
        place1.setLatitude(0.0);
        place1.setLongitude(0.0);
        place1.setPlaceId(1);
        place1.setAddress("151 3rd St, San Francisco, CA 94103");
        place1.setImageURL("https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg");
        place1.setDuration(1.5);
        place1.setPlaceInformation("Contemporary & modern paintings, installations, photographs, media & more in a sleek space.");
        place1.setOpenTime("10AM - 5PM");
        Place place2 = new Place();
        place2.setPlaceName("The Painted Ladies");
        place2.setLatitude(1.0);
        place2.setLongitude(1.0);
        place2.setPlaceId(2);
        place2.setAddress("Steiner St &, Hayes St, San Francisco, CA 94117");
        place2.setImageURL("https://d3qvqlc701gzhm.cloudfront.net/thumbs/b0a762501eab02f8955153c20a54b3e5078bfd1c9418dde96e623bbbcd82312e-750.jpg");
        place2.setDuration(0.5);
        place2.setPlaceInformation("Historical row of Victorian houses well-known for appearances on movies, TV shows & postcards.");
        place2.setOpenTime("5AM - 12AM");
        Place place3 = new Place();
        place3.setPlaceName("The Painted Ladies");
        place3.setLatitude(0.5);
        place3.setLongitude(0.5);
        place3.setPlaceId(3);
        List<Place> placeList = new ArrayList<>();
        placeList.add(place1);
        placeList.add(place2);
        placeList.add(place3);
        int duration = 1;
        int userId = 1;
        Plan planRes = planService.generatePlan(placeList, duration, userId);
        System.out.println("TESTING BEGIN =============");
        System.out.println(planRes);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(0).getPlaceId() == 1);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(1).getPlaceId() == 3);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(2).getPlaceId() == 2);
    }

}
