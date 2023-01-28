import { ExternalLink } from '../../ExternalLink.type';
import { SearchTag } from '../../SearchTag.type';

export type GameServantMetadata = {

    fgoManagerName?: string;

    searchTags: Array<SearchTag>;

    links: Array<ExternalLink>;

};
