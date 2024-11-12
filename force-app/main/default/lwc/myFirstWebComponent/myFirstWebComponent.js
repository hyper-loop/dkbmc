/**
 * @description       : 
 * @author            : namho.kangR_D@dkbmc.com
 * @group             : 
 * @last modified on  : 2024-09-12
 * @last modified by  : namho.kangR_D@dkbmc.com
 * Modifications Log
 * Ver   Date         Author                    Modification
 * 1.0   2024-09-12   namho.kangR_D@dkbmc.com   Initial Version
**/
import { LightningElement, track } from 'lwc';
export default class MyFirstWebComponent extends LightningElement {
	@track
	contacts = [
		{
			Id: 1,
			Name: 'Amy Taylor',
			Title: 'VP of Engineering',
		},
		{
			Id: 2,
			Name: 'Michael Jones',
			Title: 'VP of Sales',
		},
		{
			Id: 3,
			Name: 'Jennifer Wu',
			Title: 'CEO',
		},
	];
}