package com.celebrateit.pojo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor

@Table(name="service_bookings")
public class ServiceBookings extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="booking_id")
	private Integer bookingid;
	
	
	@Column(name="events_details",length=512,nullable = false)
	private String eventdetails;
	
	@Column(name="event_date",nullable = false)
	private LocalDate eventdate;
	
	@Column(name="total_price",nullable = false)
	private Double totalPrice; 
	
	@Column(name="advance_payment",nullable = false)
	private Double advancepayment; 
	
	@Enumerated(EnumType.STRING)
	@Column(name="payment_method",length = 20, nullable = false)//varchar(20)
	private PaymentMethod paymentmethod;
	
	@Enumerated(EnumType.STRING)
	@Column(name="payment_status",length = 20,nullable = false,columnDefinition = "VARCHAR(20) DEFAULT 'PARTIAL'")//varchar(20)
	private PaymentStatus paymentstatus;
	
	@Enumerated(EnumType.STRING)
	@Column(name="booking_status",length = 20,nullable = false,columnDefinition = "VARCHAR(20) DEFAULT 'PENDING'")//varchar(20)
	private BookingStatus bookingstatus;
	
	
	
	//FK
	//private Integer userid;
	//private Integer serviceid;
	 // Foreign Key for User
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false) // "user_id" is the foreign key column in this table
//    private User user;

    // Foreign Key for Service
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false) // "service_id" is the foreign key column in this table
    private Services service;
}
