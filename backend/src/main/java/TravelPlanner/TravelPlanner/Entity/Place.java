package TravelPlanner.TravelPlanner.Entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
//@Table(name = "place")
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer placeId;
    @NotNull
    private Double latitude;
    @NotNull
    private Double longitude;

    private Double duration;

    @NotNull
    private String placeName;
    @NotNull
    private String placeInformation;
    @NotNull
    private String openTime;
    @NotNull
    private String ImageURL;

<<<<<<< HEAD
    //geo info
    //open time

=======
    private String address;
>>>>>>> master


    //private List<User> visitors;

    //constructor
    public Place() {
    }




}
