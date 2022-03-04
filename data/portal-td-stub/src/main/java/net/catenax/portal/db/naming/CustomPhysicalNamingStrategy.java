package net.catenax.portal.db.naming;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CustomPhysicalNamingStrategy extends PhysicalNamingStrategyStandardImpl {

	private static final Logger log = LoggerFactory.getLogger(CustomPhysicalNamingStrategy.class);
	
	@Override
	public Identifier toPhysicalColumnName(final Identifier identifier, final JdbcEnvironment jdbcEnv) {
		// log.info("Identifier: " + identifier.getText());
		return identifier; // convertToCamelCase(identifier);
	}

	/*
	private Identifier convertToSnakeCase(final Identifier identifier) {
		final String regex = "([a-z])([A-Z])";
		final String replacement = "$1_$2";
		final String newName = identifier.getText().replaceAll(regex, replacement).toLowerCase();
		return Identifier.toIdentifier(newName);
	}

	private Identifier convertToCamelCase(final Identifier identifier) {
		final String regex = "([a-z])([A-Z])";
		final String replacement = "$1_$2";
		final String newName = identifier.getText().replaceAll(regex, replacement).toLowerCase();
		return Identifier.toIdentifier(newName);
	}
	*/
}
