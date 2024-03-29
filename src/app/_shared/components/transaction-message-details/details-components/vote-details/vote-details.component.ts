import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoteDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.GovVote>;
}
