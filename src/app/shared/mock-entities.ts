import { Entity } from './entity';
import { Version } from './version';
import { VersionService } from './version.service';

export const ENTITIES: Entity[] = [
    // v1
    {version: '01/01/2015', date: '01/01/2016', name: 'Entity 1'},
    {version: '01/01/2015', date: '01/01/2016', name: 'Entity 2'},
    // v2
    {version: '01/01/2016', date: '01/01/2016', name: 'Entity 1'},
    {version: '01/01/2016', date: '01/01/2016', name: 'Entity 2'},
    {version: '01/01/2016', date: '01/01/2016', name: 'Entity 3'},
]