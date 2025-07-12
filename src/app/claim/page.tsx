'use client'
import { useState } from "react";
import { ArrowLeft, Upload, FileText, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";

const Claim = () => {
  const [formData, setFormData] = useState({
    claimType: "",
    policyNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfIncident: "",
    timeOfIncident: "",
    location: "",
    description: "",
    urgency: "",
    injuries: false,
    policeReport: false,
    witnessAvailable: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Claim submission data:", formData);
    toast.success("Claim Submitted Successfully!", {
      description:
        "Your claim has been received. You'll receive a confirmation email with your claim number shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Klaim
          </span>
          <span className="text-sm font-medium text-blue-300">
            Klaim Asuransi
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Klaim Asuransi</h1>
      </PageHeader>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-4">
            File Your Insurance Claim
          </h1>
          <p className="text-lg text-gray-600  dark:text-white max-w-2xl mx-auto">
            We're here to help you through this process. Please provide as much
            detail as possible to expedite your claim.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Claim Type */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Claim Information
              </CardTitle>
              <CardDescription>
                Tell us about the type of claim you're filing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="claimType" className="mb-2 block">Type of Claim</Label>
                <Select
                  value={formData.claimType}
                  onValueChange={(value) =>
                    handleInputChange("claimType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select claim type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Vehicle Insurance</SelectItem>
                    <SelectItem value="home">Health Insurance</SelectItem>
                    <SelectItem value="health">Fire Insurance</SelectItem>
                    <SelectItem value="life">Marine Cargo Insurance</SelectItem>
                    <SelectItem value="business">Sharia Insurance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="policyNumber" className="mb-2 block">Policy Number</Label>
                <Input
                  id="policyNumber"
                  value={formData.policyNumber}
                  onChange={(e) =>
                    handleInputChange("policyNumber", e.target.value)
                  }
                  placeholder="Enter your policy number"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Your contact details for this claim
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="mb-2 block">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2 block">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incident Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Incident Details
              </CardTitle>
              <CardDescription>
                When and where did the incident occur?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dateOfIncident" className="mb-2 block">Date of Incident</Label>
                  <Input
                    id="dateOfIncident"
                    type="date"
                    value={formData.dateOfIncident}
                    onChange={(e) =>
                      handleInputChange("dateOfIncident", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="timeOfIncident" className="mb-2 block">
                    Time of Incident (approximate)
                  </Label>
                  <Input
                    id="timeOfIncident"
                    type="time"
                    value={formData.timeOfIncident}
                    onChange={(e) =>
                      handleInputChange("timeOfIncident", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="mb-2 block">Location of Incident</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  placeholder="Street address, city, state"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description" className="mb-2 block">Description of Incident</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Please provide a detailed description of what happened..."
                  rows={5}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Help us process your claim faster
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-2 block">Urgency Level</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => handleInputChange("urgency", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="mb-0">Low - Standard processing time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="mb-0">
                      Medium - Expedited processing needed
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="mb-0">High - Urgent situation</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="injuries"
                    checked={formData.injuries}
                    onCheckedChange={(checked) =>
                      handleInputChange("injuries", checked as boolean)
                    }
                  />
                  <Label htmlFor="injuries" className="mb-0">
                    Were there any injuries involved?
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="policeReport"
                    checked={formData.policeReport}
                    onCheckedChange={(checked) =>
                      handleInputChange("policeReport", checked as boolean)
                    }
                  />
                  <Label htmlFor="policeReport" className="mb-0">
                    Was a police report filed?
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="witnessAvailable"
                    checked={formData.witnessAvailable}
                    onCheckedChange={(checked) =>
                      handleInputChange("witnessAvailable", checked as boolean)
                    }
                  />
                  <Label htmlFor="witnessAvailable" className="mb-0">
                    Are witnesses available?
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Supporting Documents
              </CardTitle>
              <CardDescription>
                Upload photos, receipts, or other relevant documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: JPG, PNG, PDF, DOC (Max 10MB each)
                </p>
                <Button type="button" variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center">
            <Button type="submit" size="lg" className="bg-blue-600 px-12">
              Submit Claim
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Claim;