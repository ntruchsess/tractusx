package net.catenax.portal.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import net.catenax.portal.model.Language;

public interface LanguageRepository extends PagingAndSortingRepository<Language, String> {

}
