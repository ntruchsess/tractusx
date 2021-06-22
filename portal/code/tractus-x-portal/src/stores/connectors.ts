// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import { Connector} from '../data/connector';

const Conn1 = {
    id : 'conn1',
    title: 'Catena-X CaaS',
    actions: ['START WIZARD']
}
const Conn2 = {
    id : 'conn2',
    title: 'Third Party CaaS',
    actions: ['GO TO']
}
const Conn3 = {
    id : 'conn3',
    title: 'Bring your own Connector',
    actions: ['DOWNLOAD']
}

export class Connectors {
    public static state = new Connectors();
    public Conns: Connector[] = [Conn1,Conn2,Conn3];
    public readonly categories: any[] = [{text: 'Connectors', apps: this.Conns }];
}