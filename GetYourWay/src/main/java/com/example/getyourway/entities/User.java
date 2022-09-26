package com.example.getyourway.entities;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

    private String firstname;

    private String lastname;

    private String username;

    private String email;
    @OneToOne
    private Subscription subscription;

    public boolean hasSubscription() {
        return subscription != null && !subscription.hasExpired();
    }

    @ManyToOne
    private Address address;

    private byte[] photo;

    @ManyToMany
    private List<Payment> payments;

}
