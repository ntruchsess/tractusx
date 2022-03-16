export interface TwinList {
  items: ShellDescriptor[],
  totalItems: number,
  itemCount: number,
  currentPage: number,
  totalPages: number
}

export interface ShellDescriptor {
  description: Description[],
  globalAssetId: {
    value: [
      string
    ]
  },
  idShort: string,
  identification: string,
  specificAssetIds: [
    {
      key: string,
      semanticId: semanticId,
      value: string
    }
  ],
  submodelDescriptors: [
    {
      description: Description[],
      endpoints: Endpoints[],
      idShort: string,
      identification: string,
      semanticId: semanticId
    }
  ]
}

interface Description {
  language: string,
  text: string
}

interface Endpoints {
  interface: string,
  protocolInformation: {
    endpointAddress: string,
    endpointProtocol: string,
    endpointProtocolVersion: string,
    subprotocol: string,
    subprotocolBody: string,
    subprotocolBodyEncoding: string
  }
}

interface semanticId {
  value: string[]
}
