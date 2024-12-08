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

//lombok annotations
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor


//jakarta annotations
@Table(name="photographers")
public class Photographer extends BaseEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "photographers_id") 
	private int photographersId; 
	
	@Column(name = "name", length = 100, nullable = false) 
	private String name;
	
	@Column(name = "contact", length = 15, nullable = false) 
	private String contact;
	
	@Lob
	@Column(name = "image", length = 255) 
	private byte[] image;
	
	@Column(name = "description", columnDefinition = "TEXT") 
	private String description;
	
	@Column(name = "price", precision = 10) 
	private Double price;
	
	@Column(name = "discount", precision = 5) 
	private Double discount;
	
	@Column(name = "rating", precision = 3) 
	private Double  rating;
}
