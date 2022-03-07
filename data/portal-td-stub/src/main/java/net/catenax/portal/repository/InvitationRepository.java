package net.catenax.portal.repository;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Invitation;

public interface InvitationRepository extends PagingAndSortingRepository<Invitation, String> {
	
	public Optional<Invitation> findByUuid(String uuid);

}
