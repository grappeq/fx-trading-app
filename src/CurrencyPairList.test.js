import React from 'react';
import { mount, render } from 'enzyme';
import CurrencyPairList from "./CurrencyPairList";

describe("<CurrencyPairList>", () => {
    it('renders without crashing', () => {
        render(<CurrencyPairList datasource={[
            { pair: "USD CHF", buy: 0.99143, sell: 0.99043 },
            { pair: "GBP USD", buy: 1.28495, sell: 1.2836 },
            { pair: "GBP CHF", buy: 1.27378, sell: 1.27147 },
            { pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
            { pair: "USD JPY", buy: 110.467, sell: 110.417 },
            { pair: "EUR JPY", buy: 120.589, sell: 120.491 }
        ]} />);
    });

    it('shows fallen price indicator when buy price has fallen', () => {
        const wrapper = mount(<CurrencyPairList datasource={[{ pair: "USD CHF", buy: 0.99143, sell: 0.99043 }]} />);
        wrapper.setProps({
            datasource: [{ pair: "USD CHF", buy: 0.99123, sell: 0.99063 }]
        })
        expect(wrapper.find('.price-change-indicator.price-change-indicator--has-fallen')).toHaveLength(1);
    });

    it('shows risen price indicator when buy price has risen', () => {
        const wrapper = mount(<CurrencyPairList datasource={[{ pair: "USD CHF", buy: 0.99143, sell: 0.99043 }]} />);
        wrapper.setProps({
            datasource: [{ pair: "USD CHF", buy: 0.99163, sell: 0.99063 }]
        })
        expect(wrapper.find('.price-change-indicator')).toHaveLength(1);
        expect(wrapper.find('.price-change-indicator.price-change-indicator--has-fallen')).toHaveLength(0);
    });
});