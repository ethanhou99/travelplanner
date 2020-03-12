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
        place2.setLatitude(-1.0);
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
        Place place4 = new Place();
        place4.setPlaceName("San Francisco Museum of Modern Art");
        place4.setLatitude(1.5);
        place4.setLongitude(1.5);
        place4.setPlaceId(4);
        place4.setAddress("San Francisco, CA 94103");
        place4.setImageURL("https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg");
        place4.setDuration(1.5);
        place4.setPlaceInformation("Contemporary & modern paintings, installations, photographs, media & more in a sleek space.");
        place4.setOpenTime("10AM - 5PM");
        Place place5 = new Place();
        place5.setPlaceName("San Francisco Museum of Modern Art");
        place5.setLatitude(1.5);
        place5.setLongitude(2.0);
        place5.setPlaceId(5);
        place5.setAddress("San Francisco, CA 94103");
        place5.setImageURL("https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg");
        place5.setDuration(1.5);
        place5.setPlaceInformation("Contemporary & modern paintings, installations, photographs, media & more in a sleek space.");
        place5.setOpenTime("10AM - 5PM");

        Place place6 = new Place();
        place6.setPlaceName("San Francisco Museum of Modern Art");
        place6.setLatitude(3.0);
        place6.setLongitude(1.5);
        place6.setPlaceId(6);
        place6.setAddress("San Francisco, CA 94103");
        place6.setImageURL("https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg");
        place6.setDuration(1.5);
        place6.setPlaceInformation("Contemporary & modern paintings, installations, photographs, media & more in a sleek space.");
        place6.setOpenTime("10AM - 5PM");
        List<Place> placeList = new ArrayList<>();
        placeList.add(place1);
        placeList.add(place2);
        placeList.add(place3);
//        placeList.add(place4);
//        placeList.add(place5);
//        placeList.add(place6);
        int duration = 1;
        int userId = 1;
        Plan planRes = planService.generatePlan(placeList, duration, userId);
        System.out.println("TESTING BEGIN =============");
        System.out.println(planRes);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(0).getPlaceId() == 2);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(1).getPlaceId() == 1);
        assert(planRes.getDailyPlanList().get(0).getPlaceList().get(2).getPlaceId() == 3);
//        assert(planRes.getDailyPlanList().get(1).getPlaceList().get(0).getPlaceId() == 5);
//        assert(planRes.getDailyPlanList().get(1).getPlaceList().get(1).getPlaceId() == 4);
//        assert(planRes.getDailyPlanList().get(1).getPlaceList().get(2).getPlaceId() == 6);
    }

}
