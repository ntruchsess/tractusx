CREATE TABLE IF NOT EXISTS parts (
                                     id SERIAL PRIMARY KEY,
                                     isTempPart BOOLEAN,

                                     manufacturerOneId VARCHAR(255),
                                     manufactureContractOneId VARCHAR(255),
                                     uniqueId VARCHAR(255),
                                     manufacturerUniqueId VARCHAR(255),
                                     customerUniqueId VARCHAR(255),
                                     --isParentOf VARCHAR(1024),
                                     qualityAlert BOOLEAN,
                                     qualityType VARCHAR(255),
                                     importTimestampUtc timestamp,
                                     validUntilUtc timestamp);

CREATE TABLE IF NOT EXISTS partRelations (
    parentPartId INT,
    childPartId INT,
    CONSTRAINT fk_parent
    FOREIGN KEY (parentPartId) REFERENCES parts(id),
    CONSTRAINT fk_child
    FOREIGN KEY (childPartId) REFERENCES parts(id)
);