package net.catenax.portal.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonProperty;

@MappedSuperclass
public class BaseEntity {

	@JsonProperty("dateCreated")
	@Column(name = "date_created")
	private Timestamp dateCreated = null;

	@JsonProperty("dateLastChanged")
	@Column(name = "date_last_changed")
	private Timestamp dateLastChanged = null;

	public BaseEntity() {
		long now = System.currentTimeMillis();
		Timestamp t = new Timestamp(now);
		this.dateCreated = t;
		this.dateLastChanged = t;
	}

	public Timestamp getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Timestamp dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Timestamp getDateLastChanged() {
		return dateLastChanged;
	}

	public void setDateLastChanged(Timestamp dateLastChanged) {
		this.dateLastChanged = dateLastChanged;
	}
	
	public void update() {
		long now = System.currentTimeMillis();
		Timestamp t = new Timestamp(now);
		this.dateLastChanged = t;
		
		if(this.dateCreated == null) {
			this.dateCreated = t;
		}
	}

}
