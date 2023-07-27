import { renderRemix } from 'tests/remix-stub';
import {DeviceDetectProvider} from "~/hooks/use-device-detect";


describe('DeviceDetectProvider', () => {
    it('Deverá renderizar o elemento filho', () => {
        const { getByText } = renderRemix(
            <DeviceDetectProvider>
                <div>hello</div>
            </DeviceDetectProvider>,
        );

        expect(getByText('hello')).toBeInTheDocument();
    });
});
