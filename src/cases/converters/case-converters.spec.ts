import { SearchResultViewItem } from '@hmcts/ccd-case-ui-toolkit';
import { SharedCase } from '@hmcts/rpx-xui-common-lib/lib/models/case-share.model';
import * as converts from 'src/cases/converters/case-converter';

describe('case converters', () => {

  it('should convert to share case', () => {
    const selectedCases = [{
      case_id: '1',
      case_fields: {
      }
    }, {
      case_id: '2',
      case_fields: {
      }
    }];
    const expectedShareCases = [{caseId: '1', caseTitle: ''}, {caseId: '2', caseTitle: ''}];
    const shareCases: SharedCase[] = converts.toShareCaseConverter(selectedCases);
    expect(shareCases).toEqual(expectedShareCases);
  });

  it('should convert to search result view item', () => {
    const sharedCases = [{caseId: '1', caseTitle: ''}, {caseId: '2', caseTitle: ''}];
    const expectedSearchResultViewItem = [{
      case_id: '1',
      case_fields: null
    }, {
      case_id: '2',
      case_fields: null
    }];
    const searchResultViewItem: SearchResultViewItem[] = converts.toSearchResultViewItemConverter(sharedCases);
    expect(searchResultViewItem).toEqual(expectedSearchResultViewItem);
  });
});