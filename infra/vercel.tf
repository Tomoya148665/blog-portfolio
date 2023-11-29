terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
    }
  }
}

variable "vercel_api_token" {}
variable "api_url" {}
variable "contentful_delivery_access_token" {}
variable "contentful_space_id" {}
variable "contentful_environment" {}
variable "contentful_management_token" {
  sensitive = true
}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "jetgee-media" {
  name            = "jetgee-media"
  framework       = "astro"
  build_command   = "yarn build"
  team_id         = "team_cUUJOF5e58em9YTg9UnbzH1n" 
  install_command = "yarn"
  git_repository = {
    type = "github"
    repo = "wrexiv/jetgee-media"
    branch = "main"
    production_branch = "main"
  }
  serverless_function_region = "hnd1"
  environment = [
    {
      key    = "API_URL"
      value  = var.api_url
      target = ["production", "preview"]
    },
    {
      key = "VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN"
      value = var.contentful_delivery_access_token 
      target = ["production", "preview"]
    },
    {
      key = "VITE_CONTENTFUL_SPACE_ID"
      value = var.contentful_space_id
      target = ["production", "preview"]
    },
    {
      key = "VITE_CONTENTFUL_ENVIRONMENT"
      value = var.contentful_environment
      target = ["production", "preview"]
    },
    {
      key = "VITE_CONTENTFUL_MANAGEMENT_TOKEN"
      value = var.contentful_management_token
      target = ["production", "preview"]
    }
  ]
}
