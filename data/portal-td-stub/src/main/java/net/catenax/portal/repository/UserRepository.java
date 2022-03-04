package net.catenax.portal.repository;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.User;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
	
	public Optional<User> findByUuid(String uuid);

}
