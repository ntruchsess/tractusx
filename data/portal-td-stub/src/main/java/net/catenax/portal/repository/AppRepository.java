package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.App;

public interface AppRepository extends PagingAndSortingRepository<App, String> {
	
	Iterable<App> findAllByName(String name);
	
	App findByName(String name);

}
