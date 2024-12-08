package com.celebrateit.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//lombok annotation
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor

//jakarta
@Table(name="services")
public class Services extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="service_id")
	private Integer serviceid;
	
	@Column(length=100,nullable = false)
	private String title;
	
	@Column(length=512,nullable = false)
	private String description;
	@Lob //large objects to be stored in db - def blob type in mysql - longblob
	@Column(nullable = false)
	private byte[] image;
	
	@Column(name="base_price",nullable = false)
	private Double basePrice; 
	
	@Column(nullable = false,columnDefinition = "DOUBLE DEFAULT 0")
	private Double discount; 
	
	@Column(nullable = false)
	private Double rating; 
	
	// for soft delete
	@Column(name="is_active",nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
	private Boolean isActive;
	
	 @Column(name="is_approved",nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean isApproved;
	
	//FK
	//private Integer categoryid;

}
