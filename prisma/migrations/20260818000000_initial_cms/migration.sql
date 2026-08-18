-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "SectionType" AS ENUM ('HERO', 'OVERVIEW', 'DESCRIPTION', 'GALLERY', 'FEATURES', 'BENEFITS', 'SPECIFICATIONS', 'APPLICATIONS', 'PROCESS', 'FAQ', 'CTA', 'DOWNLOADS', 'RELATED', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('DRAFT', 'ONGOING', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'SVG', 'PDF', 'VIDEO', 'DOCUMENT');

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR(80) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_permissions" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "phone" VARCHAR(30),
    "password_hash" VARCHAR(255) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "profile_image_id" INTEGER,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token_hash" VARCHAR(255) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_folders" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "parent_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "file_name" VARCHAR(191) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "mime_type" VARCHAR(100) NOT NULL,
    "type" "MediaType" NOT NULL,
    "size" INTEGER NOT NULL,
    "alt_text" VARCHAR(255),
    "caption" TEXT,
    "folder_id" INTEGER,
    "uploaded_by_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solution_categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "description" TEXT,
    "icon_id" INTEGER,
    "image_id" INTEGER,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "seo_title" VARCHAR(191),
    "meta_description" VARCHAR(320),
    "meta_keywords" TEXT,
    "canonical_url" VARCHAR(500),
    "og_image_id" INTEGER,
    "robots" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "solution_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solution_subcategories" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "description" TEXT,
    "thumbnail_id" INTEGER,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "seo_title" VARCHAR(191),
    "meta_description" VARCHAR(320),
    "meta_keywords" TEXT,
    "canonical_url" VARCHAR(500),
    "og_image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "solution_subcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solution_pages" (
    "id" SERIAL NOT NULL,
    "subcategory_id" INTEGER NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "excerpt" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "published_at" TIMESTAMP(3),
    "seo_title" VARCHAR(191),
    "meta_description" VARCHAR(320),
    "meta_keywords" TEXT,
    "canonical_url" VARCHAR(500),
    "og_image_id" INTEGER,
    "twitter_card" VARCHAR(50),
    "schema_json" JSONB,
    "robots" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "solution_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_sections" (
    "id" SERIAL NOT NULL,
    "page_id" INTEGER NOT NULL,
    "type" "SectionType" NOT NULL,
    "title" VARCHAR(191),
    "content" JSONB NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "page_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "related_solutions" (
    "page_id" INTEGER NOT NULL,
    "related_page_id" INTEGER NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "related_solutions_pkey" PRIMARY KEY ("page_id","related_page_id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "summary" TEXT,
    "content" JSONB,
    "status" "ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "industry_id" INTEGER,
    "image_id" INTEGER,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "industries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "description" TEXT,
    "image_id" INTEGER,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "industries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "navigation" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(120) NOT NULL,
    "href" VARCHAR(500),
    "location" VARCHAR(50) NOT NULL,
    "parent_id" INTEGER,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "navigation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" SERIAL NOT NULL,
    "group" VARCHAR(80) NOT NULL,
    "key" VARCHAR(120) NOT NULL,
    "value" JSONB NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" BIGSERIAL NOT NULL,
    "user_id" INTEGER,
    "action" VARCHAR(50) NOT NULL,
    "entity_type" VARCHAR(80),
    "entity_id" VARCHAR(80),
    "metadata" JSONB,
    "ip_address" VARCHAR(45),
    "user_agent" VARCHAR(500),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_key_key" ON "permissions"("key");

-- CreateIndex
CREATE INDEX "role_permissions_permission_id_idx" ON "role_permissions"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_role_id_status_idx" ON "users"("role_id", "status");

-- CreateIndex
CREATE INDEX "users_deleted_at_idx" ON "users"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_hash_key" ON "password_reset_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "password_reset_tokens_user_id_expires_at_idx" ON "password_reset_tokens"("user_id", "expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "media_folders_slug_key" ON "media_folders"("slug");

-- CreateIndex
CREATE INDEX "media_folders_parent_id_idx" ON "media_folders"("parent_id");

-- CreateIndex
CREATE INDEX "media_folder_id_type_idx" ON "media"("folder_id", "type");

-- CreateIndex
CREATE INDEX "media_uploaded_by_id_idx" ON "media"("uploaded_by_id");

-- CreateIndex
CREATE INDEX "media_deleted_at_idx" ON "media"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "solution_categories_slug_key" ON "solution_categories"("slug");

-- CreateIndex
CREATE INDEX "solution_categories_is_enabled_status_sort_order_idx" ON "solution_categories"("is_enabled", "status", "sort_order");

-- CreateIndex
CREATE INDEX "solution_categories_deleted_at_idx" ON "solution_categories"("deleted_at");

-- CreateIndex
CREATE INDEX "solution_subcategories_category_id_is_enabled_status_sort_o_idx" ON "solution_subcategories"("category_id", "is_enabled", "status", "sort_order");

-- CreateIndex
CREATE INDEX "solution_subcategories_deleted_at_idx" ON "solution_subcategories"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "solution_subcategories_category_id_slug_key" ON "solution_subcategories"("category_id", "slug");

-- CreateIndex
CREATE INDEX "solution_pages_status_published_at_sort_order_idx" ON "solution_pages"("status", "published_at", "sort_order");

-- CreateIndex
CREATE INDEX "solution_pages_deleted_at_idx" ON "solution_pages"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "solution_pages_subcategory_id_slug_key" ON "solution_pages"("subcategory_id", "slug");

-- CreateIndex
CREATE INDEX "page_sections_page_id_is_enabled_sort_order_idx" ON "page_sections"("page_id", "is_enabled", "sort_order");

-- CreateIndex
CREATE INDEX "related_solutions_related_page_id_idx" ON "related_solutions"("related_page_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");

-- CreateIndex
CREATE INDEX "projects_status_industry_id_idx" ON "projects"("status", "industry_id");

-- CreateIndex
CREATE INDEX "projects_deleted_at_idx" ON "projects"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "industries_slug_key" ON "industries"("slug");

-- CreateIndex
CREATE INDEX "industries_is_enabled_sort_order_idx" ON "industries"("is_enabled", "sort_order");

-- CreateIndex
CREATE INDEX "navigation_location_parent_id_is_enabled_sort_order_idx" ON "navigation"("location", "parent_id", "is_enabled", "sort_order");

-- CreateIndex
CREATE UNIQUE INDEX "settings_key_key" ON "settings"("key");

-- CreateIndex
CREATE INDEX "settings_group_is_public_idx" ON "settings"("group", "is_public");

-- CreateIndex
CREATE INDEX "activity_logs_user_id_created_at_idx" ON "activity_logs"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "activity_logs_entity_type_entity_id_idx" ON "activity_logs"("entity_type", "entity_id");

-- CreateIndex
CREATE INDEX "activity_logs_action_created_at_idx" ON "activity_logs"("action", "created_at");

-- AddForeignKey
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_profile_image_id_fkey" FOREIGN KEY ("profile_image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "media_folders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "media_folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_uploaded_by_id_fkey" FOREIGN KEY ("uploaded_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_categories" ADD CONSTRAINT "solution_categories_icon_id_fkey" FOREIGN KEY ("icon_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_categories" ADD CONSTRAINT "solution_categories_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_categories" ADD CONSTRAINT "solution_categories_og_image_id_fkey" FOREIGN KEY ("og_image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_subcategories" ADD CONSTRAINT "solution_subcategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "solution_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_subcategories" ADD CONSTRAINT "solution_subcategories_thumbnail_id_fkey" FOREIGN KEY ("thumbnail_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_subcategories" ADD CONSTRAINT "solution_subcategories_og_image_id_fkey" FOREIGN KEY ("og_image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_pages" ADD CONSTRAINT "solution_pages_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "solution_subcategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solution_pages" ADD CONSTRAINT "solution_pages_og_image_id_fkey" FOREIGN KEY ("og_image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_sections" ADD CONSTRAINT "page_sections_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "solution_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "related_solutions" ADD CONSTRAINT "related_solutions_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "solution_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "related_solutions" ADD CONSTRAINT "related_solutions_related_page_id_fkey" FOREIGN KEY ("related_page_id") REFERENCES "solution_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "industries" ADD CONSTRAINT "industries_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navigation" ADD CONSTRAINT "navigation_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "navigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

