import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-withdraw-validator-commission-details',
  templateUrl: './withdraw-validator-commission-details.component.html',
  styleUrls: ['./withdraw-validator-commission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawValidatorCommissionDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.DistributionWithdrawValidatorCommission>;
}
