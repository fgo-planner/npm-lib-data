import { ExternalLink } from '../../ExternalLink.type';

export type GameServantMetadata = {

    displayName?: string;

    fgoManagerName?: string;

    searchTags?: Array<string>;

    links: Array<ExternalLink>;

};
