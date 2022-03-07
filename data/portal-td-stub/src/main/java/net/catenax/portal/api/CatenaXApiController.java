package net.catenax.portal.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Schema;
import net.catenax.portal.model.Address;
import net.catenax.portal.model.Agreement;
import net.catenax.portal.model.App;
import net.catenax.portal.model.AppDescription;
import net.catenax.portal.model.AppLicense;
import net.catenax.portal.model.AppVersion;
import net.catenax.portal.model.CatenaXIdentityProvider;
import net.catenax.portal.model.Company;
import net.catenax.portal.model.CompanyApplication;
import net.catenax.portal.model.CompanyRole;
import net.catenax.portal.model.Consent;
import net.catenax.portal.model.Country;
import net.catenax.portal.model.Document;
import net.catenax.portal.model.DocumentTemplate;
import net.catenax.portal.model.IdentityProvider;
import net.catenax.portal.model.Invitation;
import net.catenax.portal.model.Language;
import net.catenax.portal.model.Role;
import net.catenax.portal.model.UseCase;
import net.catenax.portal.model.User;
import net.catenax.portal.repository.AddressRepository;
import net.catenax.portal.repository.AgreementRepository;
import net.catenax.portal.repository.AppDescriptionRepository;
import net.catenax.portal.repository.AppLicenseRepository;
import net.catenax.portal.repository.AppRepository;
import net.catenax.portal.repository.AppVersionRepository;
import net.catenax.portal.repository.CompanyApplicationRepository;
import net.catenax.portal.repository.CompanyRepository;
import net.catenax.portal.repository.CompanyRoleRepository;
import net.catenax.portal.repository.ConsentRepository;
import net.catenax.portal.repository.CountryRepository;
import net.catenax.portal.repository.DocumentRepository;
import net.catenax.portal.repository.DocumentTemplateRepository;
import net.catenax.portal.repository.IdentityProviderRepository;
import net.catenax.portal.repository.InvitationRepository;
import net.catenax.portal.repository.LanguageRepository;
import net.catenax.portal.repository.RoleRepository;
import net.catenax.portal.repository.UseCaseRepository;
import net.catenax.portal.repository.UserRepository;
import net.catenax.portal.testdata.TestdataHelper;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")
@RestController
public class CatenaXApiController implements CatenaXApi {

	private static final Logger log = LoggerFactory.getLogger(CatenaXApiController.class);

	private final ObjectMapper objectMapper;

	private final HttpServletRequest request;

	@Autowired
	CompanyRepository companyRepository;

	@Autowired
	CompanyRoleRepository companyRoleRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	CompanyApplicationRepository companyApplicationRepository;

	@Autowired
	InvitationRepository invitationRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	AppRepository appRepository;

	@Autowired
	AppDescriptionRepository appDescriptionRepository;

	@Autowired
	AppVersionRepository appVersionRepository;

	@Autowired
	AppLicenseRepository appLicenseRepository;

	@Autowired
	DocumentRepository documentRepository;

	@Autowired
	UseCaseRepository useCaseRepository;

	@Autowired
	DocumentTemplateRepository documentTemplateRepository;

	@Autowired
	CountryRepository countryRepository;

	@Autowired
	LanguageRepository languageRepository;

	@Autowired
	IdentityProviderRepository idpRepository;

	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	AgreementRepository agreementRepository;
	
	@Autowired
	ConsentRepository consentRepository;

	@Autowired
	public CatenaXApiController(ObjectMapper objectMapper, HttpServletRequest request) {
		this.objectMapper = objectMapper;
		this.request = request;
	}

	@Override
	public ResponseEntity<String> getAuthUrlForInvitation(String invitation) {
		try {
			log.info("Find invitation by uuid: " + invitation);
			Invitation i = this.invitationRepository.findByUuid(invitation).get();

			CatenaXIdentityProvider idp = (CatenaXIdentityProvider) i.getUser().getCompany().getIdp();
			String result = idp.getServerUrl();
			return new ResponseEntity<String>(result, HttpStatus.OK);
		} catch (Exception e) {
			log.error("Couldn't serialize response for content type application/json", e);
			return new ResponseEntity<String>("Failed to resolve invitation", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@Override
	public ResponseEntity<String> getAuthUrlForUser(String uuid) {
		try {
			log.info("Find authurl by user-uuid: " + uuid);
			User u = this.userRepository.findByUuid(uuid).get();
			return this.getAuthUrlForCompany(u.getCompany().getCompanyID());
		} catch (Exception e) {
			log.error("Couldn't serialize response for content type application/json", e);
			return new ResponseEntity<String>("Failed to resolve invitation", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Override
	public ResponseEntity<String> getAuthUrlForCompany(String uuid) {
		try {
			log.info("Find authurl by company-uuid: " + uuid);
			Company c = this.companyRepository.findByCompanyID(uuid).get();

			CatenaXIdentityProvider idp = (CatenaXIdentityProvider) c.getIdp();
			String result = idp.getServerUrl();
			return new ResponseEntity<String>(result, HttpStatus.OK);
		} catch (Exception e) {
			log.error("Couldn't serialize response for content type application/json", e);
			return new ResponseEntity<String>("Failed to resolve invitation", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Transactional
	public ResponseEntity<Void> injectTestdata() {
		try {
			log.info("Create Testdata ...");
			Map<Class, List<Object>> testdata = null;

			Language lDE = new Language().shortName("de").longNameDe("deutsch").longNameEn("german");
			this.languageRepository.save(lDE);
			lDE = this.languageRepository.save(lDE);
			testdata = TestdataHelper.addTestdata(lDE, testdata);

			Language lEN = new Language().shortName("en").longNameDe("englisch").longNameEn("english");
			this.languageRepository.save(lEN);
			lEN = this.languageRepository.save(lEN);
			testdata = TestdataHelper.addTestdata(lEN, testdata);

			Country coDE = new Country().nameEN("Germany").nameDE("Deutschland").alpha2Code("DE").alpha3Code("DEU");
			coDE = this.countryRepository.save(coDE);
			testdata = TestdataHelper.addTestdata(coDE, testdata);

			Country coEN = new Country().nameEN("England").nameDE("England").alpha2Code("EN").alpha3Code("ENG");
			coEN = this.countryRepository.save(coEN);
			testdata = TestdataHelper.addTestdata(coEN, testdata);

			/*
			 * Role rCompanyAdmin = new Role(); rCompanyAdmin.setUuid("COMPANY_ADMIN");
			 * rCompanyAdmin.setNameDE("Unternehmensadministrator");
			 * rCompanyAdmin.setNameEN("Company Admin"); rCompanyAdmin =
			 * this.roleRepository.save(rCompanyAdmin); testdata =
			 * TestdataHelper.addTestdata(rCompanyAdmin, testdata);
			 */

			Role rBusinessAdmin = new Role();
			rBusinessAdmin.setUuid("BUSINESS_ADMIN");
			rBusinessAdmin.setNameDE("Unternehmensadministrator");
			rBusinessAdmin.setNameEN("Business Admin");
			rBusinessAdmin = this.roleRepository.save(rBusinessAdmin);
			testdata = TestdataHelper.addTestdata(rBusinessAdmin, testdata);
			
			Role rBusinessUser = new Role();
			rBusinessUser.setUuid("BUSINESS_ADMIN");
			rBusinessUser.setNameDE("Unternehmensadministrator");
			rBusinessUser.setNameEN("Business Admin");
			rBusinessUser = this.roleRepository.save(rBusinessUser);
			testdata = TestdataHelper.addTestdata(rBusinessUser, testdata);

			Role rCXAdmin = new Role();
			rCXAdmin.setUuid("CX");
			rCXAdmin.setNameDE("CX Admin");
			rCXAdmin.setNameEN("CX Admin");
			rCXAdmin = this.roleRepository.save(rCXAdmin);
			testdata = TestdataHelper.addTestdata(rCXAdmin, testdata);

			Role rItAdmin = new Role();
			rItAdmin.setUuid("IT_ADMIN");
			rItAdmin.setNameDE("IT Administrator");
			rItAdmin.setNameEN("IT Admin");
			rItAdmin = this.roleRepository.save(rItAdmin);
			testdata = TestdataHelper.addTestdata(rItAdmin, testdata);

			Role rLegalAdmin = new Role();
			rLegalAdmin.setUuid("SIGNING_MANAGER");
			rLegalAdmin.setNameDE("Signing Manager");
			rLegalAdmin.setNameEN("Signing Manager");
			rLegalAdmin = this.roleRepository.save(rLegalAdmin);
			testdata = TestdataHelper.addTestdata(rLegalAdmin, testdata);

			Role rDev = new Role();
			rDev.setUuid("DEVELOPER");
			rDev.setNameDE("Entwickler");
			rDev.setNameEN("Developer");
			rDev = this.roleRepository.save(rDev);
			testdata = TestdataHelper.addTestdata(rDev, testdata);

			Role rDataSpec = new Role();
			rDataSpec.setUuid("DATA_SPECIALIST");
			rDataSpec.setNameDE("Data Specialist");
			rDataSpec.setNameEN("Data Specialist");
			rDataSpec = this.roleRepository.save(rDataSpec);
			testdata = TestdataHelper.addTestdata(rDataSpec, testdata);

			Role rAppAdmin = new Role();
			rAppAdmin.setUuid("APP_ADMIN");
			rAppAdmin.setNameDE("App(Store) Administrator");
			rAppAdmin.setNameEN("App(store) Admin");
			rAppAdmin = this.roleRepository.save(rAppAdmin);
			testdata = TestdataHelper.addTestdata(rAppAdmin, testdata);

			Role arDisLead = new Role();
			arDisLead.setUuid("CE.Dismantler.Lead");
			arDisLead.setNameDE("CE.Dismantler.Lead");
			arDisLead.setNameEN("CE.Dismantler.Lead");
			rAppAdmin = this.roleRepository.save(arDisLead);
			testdata = TestdataHelper.addTestdata(arDisLead, testdata);

			Role arDisMgr = new Role();
			arDisMgr.setUuid("CE.Dismantler.Manager");
			arDisMgr.setNameDE("CE.Dismantler.Manager");
			arDisMgr.setNameEN("CE.Dismantler.Manager");
			arDisMgr = this.roleRepository.save(arDisMgr);
			testdata = TestdataHelper.addTestdata(arDisMgr, testdata);

			Role arDisBuy = new Role();
			arDisBuy.setUuid("CE.Dismantler.Buy");
			arDisBuy.setNameDE("CE.Dismantler.Buy");
			arDisBuy.setNameEN("CE.Dismantler.Buy");
			arDisBuy = this.roleRepository.save(arDisBuy);
			testdata = TestdataHelper.addTestdata(arDisBuy, testdata);

			Role arDisSell = new Role();
			arDisSell.setUuid("CE.Dismantler.Seller");
			arDisSell.setNameDE("CE.Dismantler.Seller");
			arDisSell.setNameEN("CE.Dismantler.Seller");
			arDisSell = this.roleRepository.save(arDisSell);
			testdata = TestdataHelper.addTestdata(arDisSell, testdata);

			CompanyRole activeParticipant = new CompanyRole();
			activeParticipant.setCompanyRole("ACTIVE_PARTICIPANT");
			activeParticipant.setNameDe("Netzwerkteilnehmer");
			activeParticipant.setNameEn("Participant");
			activeParticipant = this.companyRoleRepository.save(activeParticipant);
			testdata = TestdataHelper.addTestdata(activeParticipant, testdata);

			CompanyRole appProvider = new CompanyRole();
			appProvider.setCompanyRole("APP_PROVIDER");
			appProvider.setNameDe("Software Anbieter");
			appProvider.setNameEn("Application Provider");
			appProvider = this.companyRoleRepository.save(appProvider);
			testdata = TestdataHelper.addTestdata(appProvider, testdata);

			UseCase ucCE = new UseCase();
			ucCE.setName("Circular Economy");
			ucCE.setShortName("CE");
			ucCE = this.useCaseRepository.save(ucCE);
			testdata = TestdataHelper.addTestdata(ucCE, testdata);

			UseCase ucTr = new UseCase();
			ucTr.setName("Traceability");
			ucTr.setShortName("Traceability");
			ucTr = this.useCaseRepository.save(ucTr);
			testdata = TestdataHelper.addTestdata(ucTr, testdata);

			UseCase ucQM = new UseCase();
			ucQM.setName("Quality Management");
			ucQM.setShortName("QM");
			ucQM = this.useCaseRepository.save(ucQM);
			testdata = TestdataHelper.addTestdata(ucQM, testdata);

			UseCase ucDemMg = new UseCase();
			ucDemMg.setName("Demand Management");
			ucDemMg.setShortName("DM");
			ucDemMg = this.useCaseRepository.save(ucDemMg);
			testdata = TestdataHelper.addTestdata(ucDemMg, testdata);

			Company cCatena = new Company();
			cCatena.setBpn("CAXSDUMMYCATENAZZ");
			cCatena.setName("Catena-X");
			cCatena.setShortName(cCatena.getName());
			cCatena.addRolesItem(activeParticipant);
			cCatena.addRolesItem(appProvider);

			cCatena.addUseCasesItem(ucCE);
			cCatena.addUseCasesItem(ucTr);
			cCatena.addUseCasesItem(ucQM);

			cCatena = this.companyRepository.save(cCatena);
			_createIdp(cCatena, testdata);
			cCatena = this.companyRepository.save(cCatena);
			testdata = TestdataHelper.addTestdata(cCatena, testdata);

			Company cBmw = new Company();
			cBmw.setBpn("CAXSDUMMYBMWZZ");
			cBmw.setName("Bayerische Motorenwerke AG");
			cBmw.setShortName("BMW AG");
			cBmw.addRolesItem(activeParticipant);
			cBmw.addRolesItem(appProvider);

			cBmw.addUseCasesItem(ucCE);
			cBmw.addUseCasesItem(ucTr);
			cBmw.addUseCasesItem(ucQM);

			Address aBmw = new Address();
			aBmw = this.addressRepository.save(aBmw);
			testdata = TestdataHelper.addTestdata(aBmw, testdata);
			cBmw.setAddress(aBmw);

			cBmw = this.companyRepository.save(cBmw);
			_createIdp(cBmw, testdata);
			cBmw = this.companyRepository.save(cBmw);
			testdata = TestdataHelper.addTestdata(cBmw, testdata);

			Company cSap = new Company();
			cSap.setBpn("CAXSDUMMYSAPZZ");
			cSap.setName("SAP AG");
			cSap.setShortName("SAP");
			cSap.addRolesItem(activeParticipant);
			cSap.addRolesItem(appProvider);

			cSap.addUseCasesItem(ucCE);
			cSap.addUseCasesItem(ucTr);
			cSap.addUseCasesItem(ucQM);

			Address aSap = new Address();
			aSap = this.addressRepository.save(aSap);
			testdata = TestdataHelper.addTestdata(aSap, testdata);
			cSap.setAddress(aSap);

			cSap = this.companyRepository.save(cSap);
			_createIdp(cSap, testdata);
			cSap = this.companyRepository.save(cSap);
			testdata = TestdataHelper.addTestdata(cSap, testdata);

			testdata = _createApp("Part Chain", lEN, "CX App Part Chain Details", 
					"Seamless part traceability through the n.tier supply chain\n"
					+ "\n"
					+ "knowledge you get detailed information about the components of your direct suppliers as well as your direct customers. This lets your answer questions such as:\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "What's the exact lead time between the produciton of a subcomponent an your own components?\n"
					+ "To wehre in the world are my components distributed and where are my suppliers located?\n"
					+ "What's the exact composition of my component on a unique ID level?\n"
					+ "\n"
					+ "\n"
					+ "Because all of that is important information. PartChain keeps a storng one-up, one-down visibilty rule. You and the other parties in the network always see - only their suppliers customers data well as own ata. Your competitors won't be able to get any sensitive information about your production data.", 
					cBmw, ucTr, testdata);
			testdata = _createApp("Dismantler App", lEN, "SAP App Dismantler App Details", 
					"The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "At the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "The solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.",
					cSap, ucCE, testdata);
			testdata = _createApp("CE Marketplace", lEN, "SAP App CE Marketplace Details", 
					"The SAP Circular Economy Application for the Catena-X comprises different solutions to collaborate on digital twin information across the entire lifecycle, be it a component, a part or an entire vehicle.\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "At the core of the application is SAPs Digital Vehicle Hub powered by the SAP Asset Intelligence Network, which integrates and interacts seamlessly along the automotive & mobility value chain. The application contains pre-delivered content for a vehicle's structure to easily model vehicle objects (e.g. model data, configuration data, technical data, lifecycle status, location).\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "The solutions help to manage all types of vehicle related master, transactional and usage data to support collaborative business models and processes.", 
					cSap, ucCE, testdata);
			testdata = _createApp("Material Traceability", lEN, "SAP App Material Traceability Details", 
					"Description\n"
					+ "\n"
					+ "Create an Intelligent Enterprise with Advanced Logistic collabration and Insights. SAP Logistics Business Network, material traceability options connect partners for inter-company collaboration and transparency. It supports a comprehensive set capabilities, allowing to manage freight more efficiently, benefit form situational awareness through track and trace, and create a trust chain for up- and downstream product genealogy.", 
					cSap, ucTr, testdata);
			testdata = _createApp("Component Performance", lEN, "BMW App Component Performance Monitor Details", 
					"Automotive suppliers must constantly monitor product performance and resolve quality issues quickly to ensure they don’t face costly claims. For quality analysts and engineers this involves a long, manual process of analyzing claims and failed parts that lacks vital information — including live vehicle data(such as Diagnostic Trouble Codes). Identifying root-cause issues is complex, issue resolution is slow, and costs quickly escalate. Component Performance Monitor (CPM) enables suppliers to better manage quality risk and significantly reduce the costs incurred from faulty parts by leveraging near-live vehicle data, empowering quality experts to:\n"
					+ "\n"
					+ "Identify failure patterns and root- cause quality issues in real time\n"
					+ "Monitor the effectiveness of remediation measures in the fleet using live vehicle data\n"
					+ "and proactively request faulty parts for further analysis.\n"
					+ "\n"
					+ "...all in a single collaborative interface that supercharges the supplier to OEM feedback cycle, leading to faster proactive issue resolution, a reduction in claims, and better customer experiences.", 
					cBmw, ucQM, testdata);

			testdata = _inviteUser("ad56702b-5908-44eb-a668-9a11a0e100d6", 
					"company.admin@cx.com", 
					"Car Factory 1",
					"idp20",
					"https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp20/protocol/openid-connect/auth?scope=openid&state=WfWQaDyv_DysgQ3A07pDoOQQfyZzNoANX25ivHB4feg.PfDHazIGYls.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp20%2Fendpoint&nonce=pvaIiIpWvlLuCBwff_EuXA",
					testdata, rBusinessAdmin);
			
			testdata = _inviteUser("44f75aca-16e6-4f71-a52a-6968f53134a9", 
					"company.admin@cx.com", 
					"Car Factory 2",
					"idp21",
					"https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp21/protocol/openid-connect/auth?scope=openid&state=3IA08dKwP2qnr5l5c1H7aW4k26O1iA7n6Lrwd7vhxJQ.1czWJ8rG8Mo.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp21%2Fendpoint&nonce=EQ5Xs219-cPPxlR9WSpQKw",
					testdata, rBusinessAdmin);
			
			testdata = _inviteUser("a46ebe2b-79a2-4205-82ca-03baf3aabf6e", 
					"company.admin@cx.com", 
					"Car Factory 3",
					"idp27",
					"https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/iamsharedidp/auth/realms/idp27/protocol/openid-connect/auth?scope=openid&state=ycgiGMROY9Jc2gL5omj0Wx4JG0Yvdu8jzVZHmr5jrtA.yxdX6eoIb6s.catenax-registration&response_type=code&client_id=central-idp&redirect_uri=https%3A%2F%2Fcatenaxdev003akssrv.germanywestcentral.cloudapp.azure.com%2Fiamcentralidp%2Fauth%2Frealms%2FCX-Central%2Fbroker%2Fidp27%2Fendpoint&nonce=bzjm_3XQw7JGv0h3uBsm4g",
					testdata, rBusinessAdmin);
			
			List<String> users = new ArrayList<>();
			
			users.add("8db1939d-7536-4a3b-8028-928268ce8145");
			users.add("dffd2eec-38d6-4dc7-944b-93622dacda14");
			users.add("c0ecb5b5-56a7-4ab1-bb05-ab214d90aced");
			users.add("9be54173-c150-41d8-9953-ace03f28356f");
			users.add("685e206d-4316-4162-928b-09bbbce56f22");
			users.add("b007b2ea-76f7-419f-a4dc-17679b340be9");
			users.add("4f717673-ed56-41ae-af61-5b99e8d5c7b9");
			users.add("f6f1e6c9-6336-48c2-bf2d-b6b924573b37");
			users.add("1df3d549-a7d5-476c-ba5b-7f40045f6d17");
			users.add("edffb495-6c50-4e5a-b774-e8ddebf88755");
			users.add("6e89bdcc-2f90-4331-a970-53bb4b982086");
			users.add("4f516647-6def-4513-926c-e4409058405a");
			users.add("a85489e7-b02c-48d3-908d-47ad20c52f83");
			users.add("10543cba-9db7-4246-ba5f-83bea31376ef");
			users.add("f59dd7bc-3d1d-4aee-b9bf-6ddf011d57c5");
			users.add("aceb8af5-f10e-48b1-9031-40ffaac0f29c");
			users.add("38a96dd6-25e4-4f63-847d-0414a29525d5");
			users.add("850b531e-cc42-4b21-be52-f8091b4d1a60");
			users.add("4eca11f3-9f50-410f-915a-78710bbc1c76");
			users.add("6c87f1ff-dce9-435d-9e9b-fd458b43feee");
			users.add("38309859-cde9-4b78-9863-860abcca0992");
			users.add("507adf20-f96f-411e-98ae-a55e9d51b389");
			users.add("329f80e1-0b38-4253-b5c6-68107f2530b3");
			users.add("39375c19-3c7f-4d3d-8fa8-e5dedd610ed4");
			users.add("c5ec91a2-ee26-4bde-9923-fa957feba6e0");
			users.add("ab4d13e3-d28a-4337-b0a1-f48d226c5f0a");
			users.add("ba42eca7-b888-45b9-85bd-a2aad29f582b");
			users.add("8e01e3dd-b3e5-4019-8b2b-a89d20e08770");
			users.add("785a73c4-bd99-41dd-96ab-d283448de173");
			users.add("588148ed-29e1-440b-8e12-28c438239968");
			users.add("14b11c97-c2bf-4087-a05a-1a0c3a5b08f3");
			users.add("89c29f40-239f-4001-8733-b82fba037125");
			users.add("28e88974-abe5-4da1-a325-bff8f467e322");
			users.add("4b66ddb5-f6e9-423a-a64e-46b6c07ef631");
			users.add("a708e70a-0d29-441d-bd19-8b07286cf2dc");
			users.add("32f3ad7e-661d-4049-ac01-783f5ea86333");
			users.add("1b005f48-c913-4627-862a-841043410fd9");
			users.add("de2225ca-7bb3-4f2a-af69-07360bbddb3e");
			users.add("cc40c57f-ab69-49bf-ab05-168c4d61ca36");
			users.add("e82ab43e-3d34-4c75-9961-6b31b00ec3cb");
			users.add("92095972-fcfc-4c94-9489-5711e0e73b71");
			
			Company cDummy = new Company()
					.bpn("CAXLDUMMYCORPZZ");
					;
			cDummy = this.companyRepository.save(cDummy);
			testdata = TestdataHelper.addTestdata(cDummy, testdata);
			
			for(String user : users) {
				User u = new User().uuid(user);
				u.setCompany(cDummy);
				u = this.userRepository.save(u);
				testdata = TestdataHelper.addTestdata(u, testdata);
			}

			TestdataHelper.saveTestData(testdata);
			log.info("Testdata successfully created");
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			log.error("Couldn't serialize response for content type application/json", e);
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	private Map<Class, List<Object>> _inviteUser(String uuid, String email, String companyName, String realm,
			String authUrl, Map<Class, List<Object>> testdata, Role... roles) {
		Map<Class, List<Object>> result = testdata;

		Address address = new Address();
		address = this.addressRepository.save(address);
		result = TestdataHelper.addTestdata(address, result);

		Company company = new Company().name(companyName).bpn("CAXS" + companyName.replaceAll(" ", "") + "ZZ");
		company.setAddress(address);
		company = this.companyRepository.save(company);

		User user = new User().uuid(uuid);
		user.setCompany(company);
		user.setCompanyAdmin(true);
		for (Role role : roles) {
			user.addRolesItem(role);
		}
		user = this.userRepository.save(user);

		CatenaXIdentityProvider idp = new CatenaXIdentityProvider().realm(realm).serverUrl(authUrl);

		idp = this.idpRepository.save(idp);
		company.setIdp(idp);
		company = this.companyRepository.save(company);

		CompanyApplication application = new CompanyApplication().company(company)
				.status(CompanyApplication.StatusEnum.VERIFY_COMPANY);

		application = this.companyApplicationRepository.save(application);

		Invitation invitation = new Invitation().application(application).user(user)
				.status(Invitation.StatusEnum.CREATED);

		invitation = this.invitationRepository.save(invitation);

		result = TestdataHelper.addTestdata(idp, result);
		result = TestdataHelper.addTestdata(user, result);
		result = TestdataHelper.addTestdata(company, result);
		result = TestdataHelper.addTestdata(invitation, result);
		result = TestdataHelper.addTestdata(application, result);

		return result;
	}

	private Map<Class, List<Object>> _createApp(String name, Language lang, String descShort, String descLong,
			Company vendor, UseCase uc, Map<Class, List<Object>> testdata) {
		Map<Class, List<Object>> result = testdata;

		App app = new App().name(name).vendor(vendor);
		app.addUseCasesItem(uc);
		app = this.appRepository.save(app);

		AppDescription desc = new AppDescription(app);
		desc.setLanguage(lang);
		desc.setDescriptionShort(descShort);
		desc.setDescriptionLong(descLong);
		desc = this.appDescriptionRepository.save(desc);

		AppVersion version = new AppVersion(app);
		version.setVersion("1.0");
		version.addDescriptionItem(desc);
		version = this.appVersionRepository.save(version);
		
		AppLicense license = new AppLicense()
				.licenseText("free of charge")
				;
		license = this.appLicenseRepository.save(license);

		app.addLicensesItem(license);
		app.setCurrentVersion(version);
		app = this.appRepository.save(app);

		result = TestdataHelper.addTestdata(app, result);
		result = TestdataHelper.addTestdata(desc, result);
		result = TestdataHelper.addTestdata(version, result);
		result = TestdataHelper.addTestdata(license, result);

		return testdata;
	}

	private Map<Class, List<Object>> _createIdp(Company company, Map<Class, List<Object>> testdata) {
		Map<Class, List<Object>> result = testdata;

		CatenaXIdentityProvider idp = new CatenaXIdentityProvider();
		company.setIdp(idp);

		idp = this.idpRepository.save(idp);
		result = TestdataHelper.addTestdata(idp, result);

		return testdata;
	}

	@Transactional
	public ResponseEntity<Agreement> createAgreement(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Agreement body) {
		return this.updateAgreement(body);
	}

	@Transactional
	public ResponseEntity<App> createApp(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody App body) {
		return this.updateApp(body);
	}

	@Transactional
	public ResponseEntity<AppDescription> createAppDescription(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppDescription body) {
		return this.updateAppDescription(body);
	}

	@Transactional
	public ResponseEntity<AppLicense> createAppLicense(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppLicense body) {
		return this.updateAppLicense(body);
	}

	@Transactional
	public ResponseEntity<AppVersion> createAppVersion(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppVersion body) {
		return this.updateAppVersion(body);
	}

	@Transactional
	public ResponseEntity<Company> createCompany(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Company body) {
		return this.updateCompany(body);
	}

	@Transactional
	public ResponseEntity<CompanyApplication> createCompanyApplication(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody CompanyApplication body) {
		return this.updateCompanyApplication(body);
	}

	@Transactional
	public ResponseEntity<Consent> createConsent(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Consent body) {
		return this.updateConsent(body);
	}

	@Transactional
	public ResponseEntity<Country> createCountry(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Country body) {
		return this.updateCountry(body);
	}

	@Transactional
	public ResponseEntity<Document> createDocument(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Document body) {
		return this.updateDocument(body);
	}

	@Transactional
	public ResponseEntity<DocumentTemplate> createDocumentTemplate(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody DocumentTemplate body) {
		return this.updateDocumentTemplate(body);
	}

	@Transactional
	public ResponseEntity<IdentityProvider> createIdentityProvider(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody IdentityProvider body) {
		return this.updateIdentityProvider(body);
	}

	@Transactional
	public ResponseEntity<Invitation> createInvitation(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Invitation body) {
		return this.updateInvitation(body);
	}

	@Transactional
	public ResponseEntity<Language> createLanguage(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Language body) {
		return this.updateLanguage(body);
	}

	@Transactional
	public ResponseEntity<Role> createRole(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Role body) {
		return this.updateRole(body);
	}

	@Transactional
	public ResponseEntity<UseCase> createUseCase(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody UseCase body) {
		return this.updateUseCase(body);
	}

	@Transactional
	public ResponseEntity<User> createUser(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody User body) {
		return this.updateUser(body);
	}

	@Transactional
	public ResponseEntity<Agreement> deleteAgreement(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Agreement> opt = this.agreementRepository.findById(id);
				this.agreementRepository.delete(opt.get());
				return new ResponseEntity<Agreement>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Agreement>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Agreement>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<App> deleteApp(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<App> opt = this.appRepository.findById(id);
				this.appRepository.delete(opt.get());
				return new ResponseEntity<App>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<App>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<App>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppDescription> deleteAppDescription(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<AppDescription> opt = this.appDescriptionRepository.findById(id);
				this.appDescriptionRepository.delete(opt.get());
				return new ResponseEntity<AppDescription>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppDescription>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppDescription>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppLicense> deleteAppLicense(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<AppLicense> opt = this.appLicenseRepository.findById(id);
				this.appLicenseRepository.delete(opt.get());
				return new ResponseEntity<AppLicense>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppLicense>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppLicense>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppVersion> deleteAppVersion(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<AppVersion> opt = this.appVersionRepository.findById(id);
				this.appVersionRepository.delete(opt.get());
				return new ResponseEntity<AppVersion>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppVersion>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppVersion>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Company> deleteCompany(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Company> opt = this.companyRepository.findById(id);
				this.companyRepository.delete(opt.get());
				return new ResponseEntity<Company>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Company>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Company>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<CompanyApplication> deleteCompanyApplication(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<CompanyApplication> opt = this.companyApplicationRepository.findById(id);
				this.companyApplicationRepository.delete(opt.get());
				return new ResponseEntity<CompanyApplication>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<CompanyApplication>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<CompanyApplication>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Consent> deleteConsent(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Consent> opt = this.consentRepository.findById(id);
				this.consentRepository.delete(opt.get());
				return new ResponseEntity<Consent>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Consent>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Consent>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Country> deleteCountry(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Country> opt = this.countryRepository.findById(id);
				this.countryRepository.delete(opt.get());
				return new ResponseEntity<Country>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Country>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Country>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Document> deleteDocument(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Document> opt = this.documentRepository.findById(id);
				this.documentRepository.delete(opt.get());
				return new ResponseEntity<Document>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Document>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Document>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<DocumentTemplate> deleteDocumentTemplate(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<DocumentTemplate> opt = this.documentTemplateRepository.findById(id);
				this.documentTemplateRepository.delete(opt.get());
				return new ResponseEntity<DocumentTemplate>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<DocumentTemplate>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<DocumentTemplate>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<IdentityProvider> deleteIdentityProvider(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<IdentityProvider> opt = this.idpRepository.findById(id);
				this.idpRepository.delete(opt.get());
				return new ResponseEntity<IdentityProvider>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<IdentityProvider>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<IdentityProvider>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Invitation> deleteInvitation(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Invitation> opt = this.invitationRepository.findById(id);
				this.invitationRepository.delete(opt.get());
				return new ResponseEntity<Invitation>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Invitation>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Invitation>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Language> deleteLanguage(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Language> opt = this.languageRepository.findById(id);
				this.languageRepository.delete(opt.get());
				return new ResponseEntity<Language>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Language>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Language>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Role> deleteRole(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<Role> opt = this.roleRepository.findById(id);
				this.roleRepository.delete(opt.get());
				return new ResponseEntity<Role>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Role>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Role>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<UseCase> deleteUseCase(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<UseCase> opt = this.useCaseRepository.findById(id);
				this.useCaseRepository.delete(opt.get());
				return new ResponseEntity<UseCase>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<UseCase>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<UseCase>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<User> deleteUser(
			@NotNull @Parameter(in = ParameterIn.QUERY, description = "ID", required = true, schema = @Schema()) @Valid @RequestParam(value = "id", required = true) String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				Optional<User> opt = this.userRepository.findById(id);
				this.userRepository.delete(opt.get());
				return new ResponseEntity<User>(opt.get(), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Agreement>> getAgreement(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Agreement> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.agreementRepository.findAll().forEach(new Consumer<Agreement>() {
						public void accept(Agreement o) {
							list.add(o);
						}
					});
				} else {
					Optional<Agreement> opt = this.agreementRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Agreement>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Agreement>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Agreement>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<App>> getApp(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<App> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.appRepository.findAll().forEach(new Consumer<App>() {
						public void accept(App o) {
							list.add(o);
						}
					});
				} else {
					Optional<App> opt = this.appRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<App>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<App>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<App>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<AppDescription>> getAppDescription(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<AppDescription>>(objectMapper.readValue("[ \"\", \"\" ]", List.class),
						HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<AppDescription>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<AppDescription>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<AppLicense>> getAppLicense(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<AppLicense>>(objectMapper.readValue("[ \"\", \"\" ]", List.class),
						HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<AppLicense>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<AppLicense>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<AppVersion>> getAppVersion(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<AppVersion>>(objectMapper.readValue("[ \"\", \"\" ]", List.class),
						HttpStatus.NOT_IMPLEMENTED);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<AppVersion>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<AppVersion>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Company>> getCompany(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Company> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.companyRepository.findAll().forEach(new Consumer<Company>() {
						public void accept(Company o) {
							list.add(o);
						}
					});
				} else {
					Optional<Company> opt = this.companyRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Company>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Company>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Company>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<CompanyApplication>> getCompanyApplication(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<CompanyApplication>>(objectMapper.readValue(
						"[ {\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"memberRoles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n  \"lastChanged\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"agreements\" : [ {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  }, {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  } ],\n  \"deputyAcknowledgement\" : false,\n  \"applicationID\" : \"applicationID\",\n  \"status\" : \"AGREEMENTS\"\n}, {\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"memberRoles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n  \"lastChanged\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"agreements\" : [ {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  }, {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  } ],\n  \"deputyAcknowledgement\" : false,\n  \"applicationID\" : \"applicationID\",\n  \"status\" : \"AGREEMENTS\"\n} ]",
						List.class), HttpStatus.NOT_IMPLEMENTED);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<CompanyApplication>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<CompanyApplication>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Consent>> getConsent(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<Consent>>(objectMapper.readValue(
						"[ {\n  \"agreement\" : {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  },\n  \"documents\" : [ {\n    \"uploadDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"document\" : \"\",\n    \"name\" : \"name\",\n    \"UUID\" : \"UUID\",\n    \"user\" : {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    },\n    \"uuid\" : \"uuid\",\n    \"version\" : \"version\",\n    \"hash\" : \"hash\"\n  }, {\n    \"uploadDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"document\" : \"\",\n    \"name\" : \"name\",\n    \"UUID\" : \"UUID\",\n    \"user\" : {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    },\n    \"uuid\" : \"uuid\",\n    \"version\" : \"version\",\n    \"hash\" : \"hash\"\n  } ],\n  \"company\" : {\n    \"bpn\" : \"0000001_BMW\",\n    \"useCases\" : [ {\n      \"name\" : \"name\",\n      \"shortName\" : \"shortName\"\n    }, {\n      \"name\" : \"name\",\n      \"shortName\" : \"shortName\"\n    } ],\n    \"companyID\" : \"companyID\",\n    \"address\" : {\n      \"country\" : {\n        \"nameDE\" : \"nameDE\",\n        \"name\" : \"name\",\n        \"nameEN\" : \"nameEN\"\n      },\n      \"zipCode\" : 6.027456183070403,\n      \"streetName\" : \"streetName\",\n      \"city\" : \"city\",\n      \"streetNumber\" : \"streetNumber\",\n      \"streetAdditional\" : \"streetAdditional\",\n      \"id\" : 0,\n      \"region\" : \"region\"\n    },\n    \"idp\" : {\n      \"uuid\" : \"uuid\"\n    },\n    \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n    \"name\" : \"name\",\n    \"admin\" : [ {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    }, {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    } ],\n    \"shortName\" : \"shortName\"\n  },\n  \"id\" : \"id\",\n  \"content\" : \"content\",\n  \"status\" : \"ACCEPTED\",\n  \"target\" : \"COMPANY\",\n  \"timestamp\" : \"2000-01-23T04:56:07.000+00:00\"\n}, {\n  \"agreement\" : {\n    \"documents\" : [ {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    }, {\n      \"name\" : \"name\",\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"version\" : \"version\"\n    } ],\n    \"name\" : \"name\",\n    \"id\" : \"id\",\n    \"issuer\" : {\n      \"bpn\" : \"0000001_BMW\",\n      \"useCases\" : [ {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      }, {\n        \"name\" : \"name\",\n        \"shortName\" : \"shortName\"\n      } ],\n      \"companyID\" : \"companyID\",\n      \"address\" : {\n        \"country\" : {\n          \"nameDE\" : \"nameDE\",\n          \"name\" : \"name\",\n          \"nameEN\" : \"nameEN\"\n        },\n        \"zipCode\" : 6.027456183070403,\n        \"streetName\" : \"streetName\",\n        \"city\" : \"city\",\n        \"streetNumber\" : \"streetNumber\",\n        \"streetAdditional\" : \"streetAdditional\",\n        \"id\" : 0,\n        \"region\" : \"region\"\n      },\n      \"idp\" : {\n        \"uuid\" : \"uuid\"\n      },\n      \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n      \"name\" : \"name\",\n      \"admin\" : [ {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      }, {\n        \"firstName\" : \"firstName\",\n        \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"lastName\" : \"lastName\",\n        \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n        \"roles\" : [ {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        }, {\n          \"name\" : \"name\",\n          \"uuid\" : \"uuid\"\n        } ],\n        \"UUID\" : \"UUID\",\n        \"uuid\" : \"uuid\",\n        \"email\" : \"email\"\n      } ],\n      \"shortName\" : \"shortName\"\n    }\n  },\n  \"documents\" : [ {\n    \"uploadDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"document\" : \"\",\n    \"name\" : \"name\",\n    \"UUID\" : \"UUID\",\n    \"user\" : {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    },\n    \"uuid\" : \"uuid\",\n    \"version\" : \"version\",\n    \"hash\" : \"hash\"\n  }, {\n    \"uploadDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"document\" : \"\",\n    \"name\" : \"name\",\n    \"UUID\" : \"UUID\",\n    \"user\" : {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    },\n    \"uuid\" : \"uuid\",\n    \"version\" : \"version\",\n    \"hash\" : \"hash\"\n  } ],\n  \"company\" : {\n    \"bpn\" : \"0000001_BMW\",\n    \"useCases\" : [ {\n      \"name\" : \"name\",\n      \"shortName\" : \"shortName\"\n    }, {\n      \"name\" : \"name\",\n      \"shortName\" : \"shortName\"\n    } ],\n    \"companyID\" : \"companyID\",\n    \"address\" : {\n      \"country\" : {\n        \"nameDE\" : \"nameDE\",\n        \"name\" : \"name\",\n        \"nameEN\" : \"nameEN\"\n      },\n      \"zipCode\" : 6.027456183070403,\n      \"streetName\" : \"streetName\",\n      \"city\" : \"city\",\n      \"streetNumber\" : \"streetNumber\",\n      \"streetAdditional\" : \"streetAdditional\",\n      \"id\" : 0,\n      \"region\" : \"region\"\n    },\n    \"idp\" : {\n      \"uuid\" : \"uuid\"\n    },\n    \"roles\" : [ \"ACTIVE_PARTICIPANT\", \"ACTIVE_PARTICIPANT\" ],\n    \"name\" : \"name\",\n    \"admin\" : [ {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    }, {\n      \"firstName\" : \"firstName\",\n      \"lastLogin\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"lastName\" : \"lastName\",\n      \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n      \"roles\" : [ {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      }, {\n        \"name\" : \"name\",\n        \"uuid\" : \"uuid\"\n      } ],\n      \"UUID\" : \"UUID\",\n      \"uuid\" : \"uuid\",\n      \"email\" : \"email\"\n    } ],\n    \"shortName\" : \"shortName\"\n  },\n  \"id\" : \"id\",\n  \"content\" : \"content\",\n  \"status\" : \"ACCEPTED\",\n  \"target\" : \"COMPANY\",\n  \"timestamp\" : \"2000-01-23T04:56:07.000+00:00\"\n} ]",
						List.class), HttpStatus.NOT_IMPLEMENTED);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Consent>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Consent>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Country>> getCountry(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Country> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.countryRepository.findAll().forEach(new Consumer<Country>() {
						public void accept(Country o) {
							list.add(o);
						}
					});
				} else {
					Optional<Country> opt = this.countryRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Country>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Country>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Country>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Document>> getDocument(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Document> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.documentRepository.findAll().forEach(new Consumer<Document>() {
						public void accept(Document o) {
							list.add(o);
						}
					});
				} else {
					Optional<Document> opt = this.documentRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Document>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Document>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Document>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<DocumentTemplate>> getDocumentTemplate(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<DocumentTemplate> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.documentTemplateRepository.findAll().forEach(new Consumer<DocumentTemplate>() {
						public void accept(DocumentTemplate o) {
							list.add(o);
						}
					});
				} else {
					Optional<DocumentTemplate> opt = this.documentTemplateRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<DocumentTemplate>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<DocumentTemplate>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<DocumentTemplate>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<IdentityProvider>> getIdentityProvider(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<List<IdentityProvider>>(objectMapper
						.readValue("[ {\n  \"uuid\" : \"uuid\"\n}, {\n  \"uuid\" : \"uuid\"\n} ]", List.class),
						HttpStatus.NOT_IMPLEMENTED);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<IdentityProvider>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<IdentityProvider>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Invitation>> getInvitation(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Invitation> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.invitationRepository.findAll().forEach(new Consumer<Invitation>() {
						public void accept(Invitation o) {
							list.add(o);
						}
					});
				} else {
					Optional<Invitation> opt = this.invitationRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Invitation>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Invitation>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Invitation>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Language>> getLanguage(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Language> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.languageRepository.findAll().forEach(new Consumer<Language>() {
						public void accept(Language o) {
							list.add(o);
						}
					});
				} else {
					Optional<Language> opt = this.languageRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Language>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Language>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Language>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<Role>> getRole(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<Role> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.roleRepository.findAll().forEach(new Consumer<Role>() {
						public void accept(Role o) {
							list.add(o);
						}
					});
				} else {
					Optional<Role> opt = this.roleRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<Role>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<Role>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<Role>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<UseCase>> getUseCase(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<UseCase> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.useCaseRepository.findAll().forEach(new Consumer<UseCase>() {
						public void accept(UseCase o) {
							list.add(o);
						}
					});
				} else {
					Optional<UseCase> opt = this.useCaseRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<UseCase>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<UseCase>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<UseCase>>(HttpStatus.NOT_IMPLEMENTED);
	}

	public ResponseEntity<List<User>> getUser(String id) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				List<User> list = new ArrayList();
				if (id == null || id.isBlank()) {
					this.userRepository.findAll().forEach(new Consumer<User>() {
						public void accept(User o) {
							list.add(o);
						}
					});
				} else {
					Optional<User> opt = this.userRepository.findById(id);
					if(opt.isPresent()) {
						list.add(opt.get());
					}
				}
				return new ResponseEntity<List<User>>(list, HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<List<User>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<List<User>>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Agreement> updateAgreement(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Agreement body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Agreement>(this.agreementRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Agreement>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Agreement>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<App> updateApp(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody App body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<App>(this.appRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<App>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<App>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppDescription> updateAppDescription(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppDescription body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<AppDescription>(this.appDescriptionRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppDescription>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppDescription>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppLicense> updateAppLicense(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppLicense body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<AppLicense>(this.appLicenseRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppLicense>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppLicense>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<AppVersion> updateAppVersion(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody AppVersion body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<AppVersion>(this.appVersionRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<AppVersion>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<AppVersion>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Company> updateCompany(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Company body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Company>(this.companyRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Company>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Company>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<CompanyApplication> updateCompanyApplication(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody CompanyApplication body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<CompanyApplication>(this.companyApplicationRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<CompanyApplication>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<CompanyApplication>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Consent> updateConsent(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Consent body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Consent>(this.consentRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Consent>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Consent>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Country> updateCountry(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Country body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<Country>(this.countryRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Country>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Country>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Document> updateDocument(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Document body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Document>(this.documentRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Document>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Document>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<DocumentTemplate> updateDocumentTemplate(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody DocumentTemplate body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<DocumentTemplate>(this.documentTemplateRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<DocumentTemplate>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<DocumentTemplate>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<IdentityProvider> updateIdentityProvider(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody IdentityProvider body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<IdentityProvider>(this.idpRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<IdentityProvider>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<IdentityProvider>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Invitation> updateInvitation(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Invitation body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Invitation>(this.invitationRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Invitation>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Invitation>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Language> updateLanguage(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Language body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				return new ResponseEntity<Language>(this.languageRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Language>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Language>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<Role> updateRole(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody Role body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<Role>(this.roleRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<Role>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<Role>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<UseCase> updateUseCase(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody UseCase body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				body.update();
				return new ResponseEntity<UseCase>(this.useCaseRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<UseCase>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<UseCase>(HttpStatus.NOT_IMPLEMENTED);
	}

	@Transactional
	public ResponseEntity<User> updateUser(
			@Parameter(in = ParameterIn.DEFAULT, description = "", required = true, schema = @Schema()) @Valid @RequestBody User body) {
		String accept = request.getHeader("Accept");
		if (accept != null && accept.contains("application/json")) {
			try {
				// body.update();
				return new ResponseEntity<User>(this.userRepository.save(body), HttpStatus.OK);
			} catch (Exception e) {
				log.error("Couldn't serialize response for content type application/json", e);
				return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
	}

}
