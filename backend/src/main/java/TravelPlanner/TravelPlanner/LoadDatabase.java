package TravelPlanner.TravelPlanner;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.User;
import TravelPlanner.TravelPlanner.Repository.PlacesRepository;
import TravelPlanner.TravelPlanner.Repository.UsersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(PlacesRepository placesRepository) {
        return args -> {
            Place place = new Place();
            place.setLatitude(37.785845);
            place.setLongitude(-122.400965);
            place.setPlaceName("San Francisco Museum of Modern Art");
            place.setPlaceInformation("Contemporary & modern paintings, installations, photographs, media & more in a sleek space.");
            place.setImageURL("https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg");
            place.setOpenTime("10AM - 5PM");
            place.setDuration(1.5);
            place.setAddress("151 3rd St, San Francisco, CA 94103");
            log.info("preloading " + placesRepository.save(place));
            Place place2 = new Place();
            place2.setLatitude(37.777292);
            place2.setLongitude(-122.432610);
            place2.setPlaceName("The Painted Ladies");
            place2.setPlaceInformation("Historical row of Victorian houses well-known for appearances on movies, TV shows & postcards.");
            place2.setImageURL("https://d3qvqlc701gzhm.cloudfront.net/thumbs/b0a762501eab02f8955153c20a54b3e5078bfd1c9418dde96e623bbbcd82312e-750.jpg");
            place2.setOpenTime("5AM - 12AM");
            place2.setDuration(0.5);
            place2.setAddress("Steiner St &, Hayes St, San Francisco, CA 94117");
            log.info("preloading " + placesRepository.save(place2));
        };
    }
}