CREATE TABLE IF NOT EXISTS parts (
                                     id SERIAL PRIMARY KEY,
                                     manufactureContractOneId VARCHAR(255),
                                     manufacturerOneId VARCHAR(255),

                                     --uniqueData
                                     uniqueId VARCHAR(255),
                                     manufacturerUniqueId VARCHAR(255),
                                     customerUniqueId VARCHAR(255),

                                     qualityAlert BOOLEAN,
                                     qualityType VARCHAR(255),

validTo date);