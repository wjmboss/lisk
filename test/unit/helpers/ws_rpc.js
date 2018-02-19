/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const wsRPC = require('../../../api/ws/rpc/ws_rpc').wsRPC;

describe('wsRPC', () => {
	describe('setServer', () => {
		before(() => {
			wsRPC.setServer(null);
		});

		after(() => {
			wsRPC.setServer(null);
		});

		it('should return server instance after setting it', () => {
			wsRPC.setServer({ name: 'my ws server' });
			var wsRPCServer = wsRPC.getServer();
			expect(wsRPCServer)
				.to.be.an('object')
				.eql({ name: 'my ws server' });
		});

		describe('getter', () => {
			it('should throw an error when setting server to null', () => {
				wsRPC.setServer(null);
				expect(wsRPC.getServer).to.throw('WS server has not been initialized!');
			});

			it('should throw an error when setting server to 0', () => {
				wsRPC.setServer(0);
				expect(wsRPC.getServer).to.throw('WS server has not been initialized!');
			});

			it('should throw an error when setting server to undefined', () => {
				wsRPC.setServer(undefined);
				expect(wsRPC.getServer).to.throw('WS server has not been initialized!');
			});
		});
	});

	describe('getServer', () => {
		before(() => {
			wsRPC.setServer(null);
		});

		after(() => {
			wsRPC.setServer(null);
		});

		it('should throw an error when WS server has not been initialized', () => {
			expect(wsRPC.getServer).to.throw('WS server has not been initialized!');
		});

		it('should return WS server if set before', () => {
			wsRPC.setServer({ name: 'my ws server' });
			expect(wsRPC.getServer).not.to.throw;
			expect(wsRPC.getServer())
				.to.a('object')
				.eql({ name: 'my ws server' });
		});
	});
});