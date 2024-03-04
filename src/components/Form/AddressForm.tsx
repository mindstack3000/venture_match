import { Input } from '../ui/input';
import React from 'react';
import { Label } from '../ui/label';

type Props = {
  setAddress: (address: {
    line1: string;
    line2: string;
    plotno: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  }) => void;

  address: {
    line1: string;
    line2: string;
    plotno: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
};

function AddressForm({ address, setAddress }: Props) {
  return (
    <div>
      <div className='py-4'>
        <Label>Address Line 1</Label>
        <Input
          placeholder="Address Line 1"
          value={address.line1}
          onChange={(e) => setAddress({ ...address, line1: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>Address Line 2</Label>
        <Input
          placeholder="Address Line 2"
          value={address.line2}
          onChange={(e) => setAddress({ ...address, line2: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>Plot No/Flat no</Label>
        <Input
          placeholder="Plot No"
          value={address.plotno}
          onChange={(e) => setAddress({ ...address, plotno: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>City</Label>
        <Input
          placeholder="City"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>State</Label>
        <Input
          placeholder="State"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>Country</Label>
        <Input
          placeholder="Country"
          value={address.country}
          onChange={(e) => setAddress({ ...address, country: e.target.value })}
        />
      </div>

      <div className='py-4'>
        <Label>Zip</Label>
        <Input
          placeholder="Zip"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />
      </div>
    </div>
  );
}

export default AddressForm;
