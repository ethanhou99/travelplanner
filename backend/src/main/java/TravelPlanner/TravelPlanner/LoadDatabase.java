package TravelPlanner.TravelPlanner;

import TravelPlanner.TravelPlanner.Entity.Place;
import TravelPlanner.TravelPlanner.Entity.User;
import TravelPlanner.TravelPlanner.Repository.PlacesRepository;
import TravelPlanner.TravelPlanner.Repository.UsersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Configuration
@Slf4j
public class LoadDatabase {
    private static final String INSTANCE = "travelplanner-instance.ckgcjsfximnc.us-west-1.rds.amazonaws.com" ;
    private static final String PORT_NUM = "3306";
    public static final String DB_NAME = "travelplanner";
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "travelplanner";
    public static final String URL = "jdbc:mysql://"	+ INSTANCE + ":" + PORT_NUM + "/" + DB_NAME
            + "?user=" + USERNAME + "&password=" + PASSWORD
            + "&autoReconnect=true&serverTimezone=UTC";
    @Bean
    CommandLineRunner initDatabase(PlacesRepository placesRepository) {
        return args -> {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver").getConstructor().newInstance();
                Connection conn = DriverManager.getConnection(URL);
                String sql = "SELECT * FROM places";
                PreparedStatement stmt = conn.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery();
                System.out.println(1);
                while(rs.next()) {
                    String placeName = rs.getString("placeName");
                    String placeAddr = rs.getString("placeAddr");
                    String openTime = rs.getString("openTime");
                    Double lat = Double.parseDouble(rs.getString("latitude"));
                    Double lon = Double.parseDouble(rs.getString("longtitude"));
                    Double duration = Double.parseDouble(rs.getString("duration"));
                    String imageUrl = rs.getString("imageURL");
                    String placeInfo = rs.getString("placeDescription");
                    Place place = new Place();
                    place.setLatitude(lat);
                    place.setLongitude(lon);
                    place.setPlaceName(placeName);
                    place.setPlaceInformation(placeInfo);
                    place.setImageURL(imageUrl);
                    place.setOpenTime(openTime);
                    place.setDuration(duration);
                    place.setAddress(placeAddr);
                    log.info("preloading " + placesRepository.save(place));
                }
                conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }

        };
    }
}