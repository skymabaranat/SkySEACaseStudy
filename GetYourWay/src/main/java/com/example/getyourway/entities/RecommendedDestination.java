package com.example.getyourway.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class RecommendedDestination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Size(min = 2, max = 60)
    private String name;
    @Size(min = 3, max = 3)
    private String arrivalIATACode;
    @Size(min = 1, max = 100)
    private String skyShow;
    @Size(min = 140, max = 2000)
    private String destinationInfo;
}
