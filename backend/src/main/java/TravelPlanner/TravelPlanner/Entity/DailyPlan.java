package TravelPlanner.TravelPlanner.Entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class DailyPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer DailyPlanId;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn
//    private Plan plan;

    private Integer DayNo;

    @ManyToMany
    private List<Place> placeList;

    public DailyPlan() {
    }
}
