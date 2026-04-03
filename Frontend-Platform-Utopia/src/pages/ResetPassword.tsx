import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ResetPassword: React.FC = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md p-8 space-y-8 bg-card/80 backdrop-blur-lg rounded-2xl shadow-lg border border-border">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Set a New Password</h1>
          <p className="text-muted-foreground">Please enter your new password below.</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Reset Password
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          <Link to="/signin" className="font-semibold text-primary hover:underline">
            &larr; Back to Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
