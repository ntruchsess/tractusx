package net.catenax.portal.testdata;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

public class TestdataHelper {

	private static final Logger log = LoggerFactory.getLogger(TestdataHelper.class);
	public static String RESOURCE_FOLER = "C:\\Users\\Chris\\workspaces\\catena-x\\portal-backend\\src\\main\\resources";

	public static Map<Class, List<Object>> addTestdata(Object o, Map<Class, List<Object>> testdata) {
		Map<Class, List<Object>> result = testdata;

		if (result == null) {
			result = new HashMap<Class, List<Object>>();
		}

		List<Object> list = null;
		if (result.containsKey(o.getClass())) {
			list = result.get(o.getClass());
		} else {
			list = new ArrayList<Object>();
		}

		list.add(o);

		result.put(o.getClass(), list);

		return result;
	}

	public static void saveTestData(Map<Class, List<Object>> testdata) {
		String folder = RESOURCE_FOLER + "/testdata/";
		ObjectMapper om = new ObjectMapper();

		for (Class c : testdata.keySet()) {
			try {
				String fname = folder + c.getSimpleName() + ".json";

				List<Object> list = testdata.get(c);
				
				String str = om.writerWithDefaultPrettyPrinter().writeValueAsString(list);

				BufferedWriter writer = new BufferedWriter(new FileWriter(fname));
				writer.write(str);

				writer.close();
			} catch (Exception e) {
				log.error(e.getMessage(), e);
			}
		}
	}

}
