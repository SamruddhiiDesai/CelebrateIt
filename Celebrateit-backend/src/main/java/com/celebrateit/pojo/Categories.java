package com.celebrateit.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

@Table(name="categories")
public class Categories extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="categorie_id")
	private Integer categorieid;
	
	@Column(name="category_name",length=100,nullable = false)
	private String categoryname;
	
	@Enumerated(EnumType.STRING)
	@Column(name="parent_category",length = 20,nullable = false)//varchar(20)
	private ParentCategory parentcategory;

}
