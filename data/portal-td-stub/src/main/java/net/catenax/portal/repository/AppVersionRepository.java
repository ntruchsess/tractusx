package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.AppVersion;

public interface AppVersionRepository extends PagingAndSortingRepository<AppVersion, String> {

}
